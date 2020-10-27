const request = require('supertest');
const server = require('../app/server');

describe('Index Route Testing', () => {
  beforeAll(() => {});

  it('should return up status with timestamp and success message.', async () => {
    const res = await request(server).get('/');
    expect(res.status).toBe(200);
    expect(res.body.up).toBe(true);
  });

  afterAll(() => {});
});
