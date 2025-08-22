import { register, login } from '../controllers/authController.js';
import { User } from '../models/index.js';
import bcrypt from 'bcrypt';

jest.mock('../models/index.js');
jest.mock('bcrypt');

describe('authController', () => {
  let req, res, next;

  beforeEach(() => {
    req = { body: {}, user: {} };
    res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    next = jest.fn();
    jest.clearAllMocks();
  });

  describe('register', () => {
    it('should register a new user', async () => {
      req.body = { username: 'user', email: 'a@test.com', password: '1234', role: 'client' };
      User.findOne.mockResolvedValue(null);
      bcrypt.hash.mockResolvedValue('hashed');
      User.create.mockResolvedValue({ id: 1 });

      await register(req, res, next);

      expect(User.findOne).toHaveBeenCalledWith({ where: { email: 'a@test.com' } });
      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith({ message: 'Inscription réussie.' });
    });

    it('should reject if email exists', async () => {
      req.body = { email: 'a@test.com' };
      User.findOne.mockResolvedValue({ id: 1 });

      await register(req, res, next);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ error: 'Email déjà utilisé.' });
    });
  });

  describe('login', () => {
    it('should login a user', async () => {
      req.body = { email: 'a@test.com', password: '1234' };
      User.findOne.mockResolvedValue({ id: 1, password_hashed: 'hashed', role: 'client', email: 'a@test.com', username: 'user' });
      bcrypt.compare.mockResolvedValue(true);

      await login(req, res, next);

      expect(User.findOne).toHaveBeenCalledWith({ where: { email: 'a@test.com' } });
      expect(res.json).toHaveBeenCalledWith(expect.objectContaining({ token: expect.any(String) }));
    });

    it('should reject wrong email', async () => {
      req.body = { email: 'notfound@test.com' };
      User.findOne.mockResolvedValue(null);

      await login(req, res, next);

      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({ error: 'Utilisateur non trouvé.' });
    });

    it('should reject wrong password', async () => {
      req.body = { email: 'a@test.com', password: 'bad' };
      User.findOne.mockResolvedValue({ id: 1, password_hashed: 'hashed' });
      bcrypt.compare.mockResolvedValue(false);

      await login(req, res, next);

      expect(res.status).toHaveBeenCalledWith(401);
      expect(res.json).toHaveBeenCalledWith({ error: 'Mot de passe incorrect.' });
    });
  });
});