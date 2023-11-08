const request = require('supertest');
const app = require('../app');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

describe('User Controllers', () => {
  beforeAll(async () => {
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  it('register test', async () => {
    const userData = {
      name: 'rezacrent',
      email: 'rezacrent@gmail.com',
      password: 'Rezacrent',
      profile: {
        create: {
          identity_number: '1238019840917', 
          identity_type: 'Passport', 
          address: 'Tangerang, Banten',
        },
      },
    };

    const response = await request(app)
      .post('/api/v1/auth/register')
      .send(userData);

  });

  it('login test', async () => {
    const userData = {
      email: 'rezacrent@gmail.com',
      password: 'Rezacrent',
    };

    const response = await request(app)
      .post('/api/v1/auth/login')
      .send(userData);

  });

  it('get user', async () => {
    const response = await request(app).get('/api/v1/users');

    expect(response.status).toBe(200);
  });
});
