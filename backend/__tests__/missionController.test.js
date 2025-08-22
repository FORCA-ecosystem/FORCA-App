import { createMission, proposeMission, assignMission, completeMission } from '../controllers/missionController.js';
import { Mission } from '../models/index.js';

jest.mock('../models/index.js');

describe('missionController', () => {
  let req, res, next;
  beforeEach(() => {
    req = { user: { id: 'client-id', role: 'client' }, body: {}, params: { id: 'mission-id' } };
    res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    next = jest.fn();
    jest.clearAllMocks();
  });

  it('should create mission for client', async () => {
    req.body = { title: 'Mission', description: 'Desc', budget: 100 };
    Mission.create.mockResolvedValue({ id: 'mission-id', ...req.body });
    await createMission(req, res, next);
    expect(Mission.create).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(201);
  });

  it('should reject mission creation for non-client', async () => {
    req.user.role = 'freelance';
    await createMission(req, res, next);
    expect(res.status).toHaveBeenCalledWith(403);
  });

  it('should allow freelance to propose', async () => {
    req.user = { id: 'freelance-id', role: 'freelance' };
    req.body = { montant: 100, message: 'Je propose' };
    Mission.findByPk.mockResolvedValue({ id: 'mission-id', status: 'open', client_id: 'client-id', propositions: [], save: jest.fn() });
    await proposeMission(req, res, next);
    expect(res.json).toHaveBeenCalledWith({ message: 'Proposition envoyée.' });
  });

  it('should reject proposal if not open', async () => {
    req.user = { id: 'freelance-id', role: 'freelance' };
    Mission.findByPk.mockResolvedValue({ status: 'completed' });
    await proposeMission(req, res, next);
    expect(res.status).toHaveBeenCalledWith(400);
  });

  it('should assign freelance', async () => {
    req.body = { freelanceId: 'freelance-id' };
    Mission.findByPk.mockResolvedValue({
      id: 'mission-id',
      client_id: 'client-id',
      status: 'open',
      propositions: [{ freelanceId: 'freelance-id' }],
      save: jest.fn()
    });
    await assignMission(req, res, next);
    expect(res.json).toHaveBeenCalledWith({ message: 'Mission assignée au freelance.' });
  });

  it('should not assign if not client', async () => {
    req.user.id = 'other-client';
    Mission.findByPk.mockResolvedValue({ client_id: 'client-id', status: 'open', propositions: [{ freelanceId: 'freelance-id' }] });
    await assignMission(req, res, next);
    expect(res.status).toHaveBeenCalledWith(403);
  });
});