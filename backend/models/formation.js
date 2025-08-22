import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/db.js';

class Formation extends Model {}

Formation.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  titre: DataTypes.STRING,
  modules: {
    type: DataTypes.JSONB, // [{titre, contenu, quiz, badge}]
    defaultValue: [],
  },
  parcours: {
    type: DataTypes.JSONB, // [{userId, modulesCompletes, dateCertif}]
    defaultValue: [],
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  }
}, {
  sequelize,
  modelName: 'formation',
  underscored: true,
});

export default Formation;