import request from 'supertest';
import app from '../src/app.ts';

describe('GET /health', () => {
  test('should return status ok', async () => {
    const res = await request(app).get('/health');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ status: 'ok' });
  });
});
