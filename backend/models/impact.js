import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/db.js';

class Impact extends Model {}

Impact.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  missionId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  freelanceId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  clientId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  note: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  commentaire: DataTypes.TEXT,
  date: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  }
}, {
  sequelize,
  modelName: 'impact',
  underscored: true,
});

export default Impact;