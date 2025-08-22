import { rateFreelance, getUserImpacts, getMyImpacts, getMissionImpact } from '../controllers/impactController.js';
import { Impact, Mission, User } from '../models/index.js';

jest.mock('../models/index.js');

describe('impactController', () => {
  let req, res, next;

  beforeEach(() => {
    req = { params: { id: 'mission-id' }, body: {}, user: { id: 'client-id' } };
    res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    next = jest.fn();
    jest.clearAllMocks();
  });

  it('should submit rating if all valid', async () => {
    req.body = { note: 5, commentaire: "Parfait" };
    Mission.findByPk.mockResolvedValue({ id: 'mission-id', client_id: 'client-id', status: 'completed', freelance_id: 'freelance-id' });
    Impact.findOne.mockResolvedValue(null);
    Impact.create.mockResolvedValue({ id: 1 });
    User.findByPk.mockResolvedValue({ id: 'freelance-id', stats: {}, save: jest.fn() });
    Impact.findAll.mockResolvedValue([{ note: 5 }]);
    await rateFreelance(req, res, next);
    expect(res.status).toHaveBeenCalledWith(201);
  });

  it('should not rate if already rated', async () => {
    req.body = { note: 5, commentaire: "Parfait" };
    Mission.findByPk.mockResolvedValue({ id: 'mission-id', client_id: 'client-id', status: 'completed', freelance_id: 'freelance-id' });
    Impact.findOne.mockResolvedValue({ id: 2 });
    await rateFreelance(req, res, next);
    expect(res.status).toHaveBeenCalledWith(400);
  });

  it('should return impacts for a freelance', async () => {
    req.params.id = 'freelance-id';
    User.findByPk.mockResolvedValue({ id: 'freelance-id', stats: {}, save: jest.fn() });
    Impact.findAll.mockResolvedValue([{ id: 1, note: 5 }]);
    await getUserImpacts(req, res, next);
    expect(res.json).toHaveBeenCalledWith(expect.objectContaining({ impacts: expect.any(Array) }));
  });

  it('should return impact for a mission', async () => {
    Mission.findByPk.mockResolvedValue({ id: 'mission-id' });
    Impact.findOne.mockResolvedValue({ id: 1, note: 5 });
    await getMissionImpact(req, res, next);
    expect(res.json).toHaveBeenCalledWith({ id: 1, note: 5 });
  });
});