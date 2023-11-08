const request = require('supertest');
const app = require('../app'); // Assuming 'app' is your Express app
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

describe('Transaction Controllers', () => {
  beforeAll(async () => {  });

  afterAll(async () => {

    await prisma.$disconnect();
  });

  it('test transaction', async () => {
    const transactionData = {
      source_account_id: 1, 
      destination_account_id: 2,
      amount: 500, 
    };

    const response = await request(app)
      .post('/api/v1/transactions')
      .send(transactionData);

    expect(response.body.data).toMatchObject({
      source_account_id: 1,
      destination_account_id: 2,
      amount: 500,
    });
  });

  it('get transactions', async () => {
    const response = await request(app).get('/api/v1/transactions');


    expect(Array.isArray(response.body.data)).toBe(true);
  });

});
