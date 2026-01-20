const request = require('supertest');
const app = require('../src/app');

describe('Posts API', () => {
  it('deve criar um post', async () => {
    const res = await request(app).post('/posts').send({
      title: 'Teste',
      content: 'Conteúdo',
      author: 'Professor'
    });

    expect(res.statusCode).toBe(201);
    expect(res.body.title).toBe('Teste');
  });
});
