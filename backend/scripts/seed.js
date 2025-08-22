import { sequelize, User, Mission, Payment, Impact } from '../models/index.js';

async function seed() {
  await sequelize.sync({ force: true });

  // Création d'utilisateurs
  const client = await User.create({ username: 'client', email: 'client@test.com', password_hashed: 'pw', role: 'client', stats: {} });
  const freelance = await User.create({ username: 'free', email: 'free@test.com', password_hashed: 'pw', role: 'freelance', stats: {} });
  const admin = await User.create({ username: 'admin', email: 'admin@test.com', password_hashed: 'pw', role: 'admin', stats: {} });

  // Missions
  const m1 = await Mission.create({ title: 'Mission ouverte', description: 'A faire', budget: 100, status: 'open', client_id: client.id });
  const m2 = await Mission.create({ title: 'Mission en cours', description: 'Bientôt finie', budget: 200, status: 'en_cours', client_id: client.id, freelance_id: freelance.id });
  const m3 = await Mission.create({ title: 'Mission terminée', description: 'Finie !', budget: 300, status: 'completed', client_id: client.id, freelance_id: freelance.id });

  // Paiements
  await Payment.create({ mission_id: m2.id, amount: 200, status: 'pending', type: 'credit', sender_id: client.id, receiver_id: 'ESCROW' });
  await Payment.create({ mission_id: m3.id, amount: 300, status: 'completed', type: 'debit', sender_id: 'ESCROW', receiver_id: freelance.id });

  // Impacts
  await Impact.create({ missionId: m3.id, freelanceId: freelance.id, clientId: client.id, note: 5, commentaire: 'Parfait' });

  // Mettre à jour stats du freelance
  freelance.stats = {
    missionsTerminees: 1,
    revenusGeneres: 300,
    notesRecues: [5],
    averageRating: '5.00'
  };
  await freelance.save();

  console.log('Seeding terminé !');
  process.exit(0);
}

seed().catch(e => { console.error(e); process.exit(1); });