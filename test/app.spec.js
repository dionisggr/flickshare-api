describe('The App', () => {
  it('GET / responds with 200 status and says "Hello, world!"', () => {
    return (
      supertest(app)
      .get('/')
      .expect(200, 'Hello, world!')
    )
  });
});