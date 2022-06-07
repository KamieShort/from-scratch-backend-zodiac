const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

const { zodiac } = require('../data/zodiac');

describe('zodiac routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('/zodiac should return an array of zodiac signs as objects', async () => {
    const res = await request(app).get('/zodiac');
    expect(res.body).toEqual(zodiac);
  });

  it('/zodiac/:id should return zodiac details', async () => {
    const res = await request(app).get('/zodiac/1');
    expect(res.body).toEqual({
      id: '1',
      name: 'aquarius',
      dates: 'Jan 21 - Feb 19',
      symbol: 'Water Bearer',
    });
  });

  afterAll(() => {
    pool.end();
  });
});
