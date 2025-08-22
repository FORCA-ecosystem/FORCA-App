import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/db.js';

class Microservice extends Model {}

Microservice.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  freelanceId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  titre: DataTypes.STRING,
  description: DataTypes.TEXT,
  prix: DataTypes.FLOAT,
  urlPublique: DataTypes.STRING,
  isActive: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  }
}, {
  sequelize,
  modelName: 'microservice',
  underscored: true,
});

export default Microservice;