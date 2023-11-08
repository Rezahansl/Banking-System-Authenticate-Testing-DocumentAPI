const request = require('supertest');
const app = require('../app');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

describe('Account Controllers', () => {
  beforeAll(async () => {
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  it('test create accounts', async () => {
    const uniqueUserId = 10; 
    const accountData = {
      userId: uniqueUserId,
      bank_name: 'Bank BCA',
      bank_account_number: '1234567890',
      balance: 1000000,
    };
  
    await prisma.users.create({
      data: {
        id: uniqueUserId,
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
      },
    });

    const response = await request(app)
      .post('/api/v1/accounts')
      .send(accountData);
  

    expect(response.status).toBe(200);
    
  });
  
  it('get accounts', async () => {

    const response = await request(app).get('/api/v1/accounts');

    expect(Array.isArray(response.body.data)).toBe(true);
  });
});
