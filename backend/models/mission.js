import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/db.js';

class Mission extends Model {}

Mission.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: DataTypes.TEXT,
  budget: DataTypes.FLOAT,
  status: {
    type: DataTypes.ENUM('open', 'assigned', 'en_cours', 'completed', 'cancelled'),
    defaultValue: 'open',
    allowNull: false,
  },
  client_id: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  freelance_id: {
    type: DataTypes.UUID,
    allowNull: true,
  },
  propositions: {
    type: DataTypes.JSONB,
    defaultValue: [],
  },
  messages: {
    type: DataTypes.JSONB,
    defaultValue: [],
  }
}, {
  sequelize,
  modelName: 'mission',
  underscored: true,
});

export default Mission;