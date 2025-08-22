import sequelize from '../config/db.js';
import User from './user.js';
import Mission from './mission.js';
import Payment from './payment.js';

// Associations
User.hasMany(Mission, { foreignKey: 'client_id', as: 'missions' });
Mission.belongsTo(User, { foreignKey: 'client_id', as: 'client' });

export { sequelize, User, Mission, Payment };