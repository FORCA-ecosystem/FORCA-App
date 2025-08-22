import { getMyProfile, getUserProfile } from '../controllers/userController.js';
import { User } from '../models/index.js';

jest.mock('../models/index.js');

describe('userController', () => {
  let req, res, next;
  beforeEach(() => {
    req = { user: { id: 'user-id' }, params: { id: 'other-id' } };
    res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    next = jest.fn();
    jest.clearAllMocks();
  });

  it('should return current user profile', async () => {
    User.findByPk.mockResolvedValue({ id: 'user-id', email: 'a@test.com' });
    await getMyProfile(req, res, next);
    expect(res.json).toHaveBeenCalledWith({ id: 'user-id', email: 'a@test.com' });
  });

  it('should return 404 if not found (me)', async () => {
    User.findByPk.mockResolvedValue(null);
    await getMyProfile(req, res, next);
    expect(res.status).toHaveBeenCalledWith(404);
  });

  it('should return public profile', async () => {
    User.findByPk.mockResolvedValue({ id: 'other-id', email: 'b@test.com' });
    await getUserProfile(req, res, next);
    expect(res.json).toHaveBeenCalledWith({ id: 'other-id', email: 'b@test.com' });
  });

  it('should return 404 if not found (other)', async () => {
    User.findByPk.mockResolvedValue(null);
    await getUserProfile(req, res, next);
    expect(res.status).toHaveBeenCalledWith(404);
  });
});