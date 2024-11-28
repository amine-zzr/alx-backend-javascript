describe('Auth feature', () => {
  before(() => {
    console.log('runs before');
  });

  beforeEach(() => {
    console.log('runs before each');
  });

  after(() => {
    console.log('runs after');
  });
  afterEach(() => {
    console.log('runs after each');
  });

  it('should be able to register', () => {
    console.log('test 1 - register');
  });

  it('should be able to sign in', () => {
    console.log('test 2 - sign in');
  });
});
