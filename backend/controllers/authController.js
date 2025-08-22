import { User } from '../models/index.js';
import bcrypt from 'bcrypt';
import { generateToken } from '../utils/jwt.js';

export const register = async (req, res, next) => {
  try {
    const { username, email, password, role } = req.body;
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) return res.status(400).json({ error: 'Email déjà utilisé.' });

    const password_hashed = await bcrypt.hash(password, 10);
    const user = await User.create({ username, email, password_hashed, role });
    res.status(201).json({ message: 'Inscription réussie.' });
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(404).json({ error: 'Utilisateur non trouvé.' });

    const valid = await bcrypt.compare(password, user.password_hashed);
    if (!valid) return res.status(401).json({ error: 'Mot de passe incorrect.' });

    const token = generateToken({ id: user.id, role: user.role });
    res.json({ token, user: { id: user.id, username: user.username, email: user.email, role: user.role } });
  } catch (err) {
    next(err);
  }
};