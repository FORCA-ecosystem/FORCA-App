import request from 'supertest';
import app from '../app.js';
import { sequelize } from '../models/index.js';

beforeAll(async () => {
  await sequelize.sync({ force: true }); // reset DB
  // Seed users, etc (voir point 4)
});

describe('MVP User flow', () => {
  let clientToken, freelanceToken, missionId;

  it('registers and logs in client', async () => {
    await request(app).post('/api/auth/register').send({ username: 'cli', email: 'cli@test.com', password: 'pw', role: 'client' });
    const res = await request(app).post('/api/auth/login').send({ email: 'cli@test.com', password: 'pw' });
    clientToken = res.body.token;
    expect(clientToken).toBeDefined();
  });

  it('client creates a mission', async () => {
    const res = await request(app)
      .post('/api/missions')
      .set('Authorization', `Bearer ${clientToken}`)
      .send({ title: 'Mission', description: 'desc', budget: 100 });
    missionId = res.body.id;
    expect(missionId).toBeDefined();
  });

  it('registers and logs in freelance', async () => {
    await request(app).post('/api/auth/register').send({ username: 'free', email: 'free@test.com', password: 'pw', role: 'freelance' });
    const res = await request(app).post('/api/auth/login').send({ email: 'free@test.com', password: 'pw' });
    freelanceToken = res.body.token;
    expect(freelanceToken).toBeDefined();
  });

  it('freelance proposes', async () => {
    await request(app)
      .post(`/api/missions/${missionId}/propose`)
      .set('Authorization', `Bearer ${freelanceToken}`)
      .send({ montant: 100, message: "Je postule" })
      .expect(200);
  });

  it('client assigns freelance', async () => {
    await request(app)
      .put(`/api/missions/${missionId}/assign`)
      .set('Authorization', `Bearer ${clientToken}`)
      .send({ freelanceId: expect.any(String) })
      .expect(200);
  });

  it('client deposits escrow', async () => {
    await request(app)
      .post('/api/payments/deposit-escrow')
      .set('Authorization', `Bearer ${clientToken}`)
      .send({ missionId, amount: 100 })
      .expect(201);
  });

  it('client completes mission and releases funds', async () => {
    await request(app)
      .put(`/api/missions/${missionId}/complete`)
      .set('Authorization', `Bearer ${clientToken}`)
      .expect(200);
  });

  it('client rates freelance', async () => {
    await request(app)
      .post(`/api/missions/${missionId}/rate`)
      .set('Authorization', `Bearer ${clientToken}`)
      .send({ note: 5, commentaire: "Super" })
      .expect(201);
  });

  it('freelance stats updated', async () => {
    const res = await request(app)
      .get('/api/users/me/impacts')
      .set('Authorization', `Bearer ${freelanceToken}`);
    expect(res.body.stats.averageRating).toBe("5.00");
  });
});