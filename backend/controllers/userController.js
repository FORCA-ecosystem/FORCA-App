import { User } from '../models/index.js';

export const getMyProfile = async (req, res, next) => {
  try {
    const user = await User.findByPk(req.user.id, {
      attributes: { exclude: ['password_hashed'] }
    });
    if (!user) return res.status(404).json({ error: 'Utilisateur non trouvé.' });
    res.json(user);
  } catch (err) {
    next(err);
  }
};

export const getUserProfile = async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id, {
      attributes: ['id', 'username', 'email', 'role', 'createdAt']
    });
    if (!user) return res.status(404).json({ error: 'Utilisateur non trouvé.' });
    res.json(user);
  } catch (err) {
    next(err);
  }
};