import { depositEscrow, releaseFunds, getUserPayments } from '../controllers/paymentController.js';
import { Payment, Mission, User } from '../models/index.js';

jest.mock('../models/index.js');

describe('paymentController', () => {
  let req, res, next;
  beforeEach(() => {
    req = { body: {}, user: { id: 'client-id' }, mission: {}, params: { id: 'mission-id' } };
    res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    next = jest.fn();
    jest.clearAllMocks();
  });

  it('should deposit escrow', async () => {
    req.body = { missionId: 'mission-id', amount: 100 };
    Mission.findByPk.mockResolvedValue({ client_id: 'client-id' });
    Payment.create.mockResolvedValue({ id: 'p1' });
    await depositEscrow(req, res, next);
    expect(res.status).toHaveBeenCalledWith(201);
  });

  it('should reject escrow if not client', async () => {
    req.body = { missionId: 'mission-id', amount: 100 };
    Mission.findByPk.mockResolvedValue({ client_id: 'other-id' });
    await depositEscrow(req, res, next);
    expect(res.status).toHaveBeenCalledWith(403);
  });

  it('should release funds on mission complete', async () => {
    req.mission = { id: 'mission-id', freelance_id: 'freelance-id' };
    Payment.findOne.mockResolvedValue({ amount: 100, save: jest.fn() });
    Payment.create.mockResolvedValue({ id: 'p2' });
    User.findByPk.mockResolvedValue({ id: 'freelance-id', stats: {}, save: jest.fn() });
    await releaseFunds(req, res, next);
    expect(res.json).toHaveBeenCalledWith(expect.objectContaining({ message: expect.stringContaining('fonds libérés') }));
  });
});