module.exports = {
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  API_KEY: process.env.API_KEY || 'my-secret-admin',
  ADMIN_KEY: process.env.ADMIN_KEY || 'my-secret-admin',
  JWT_EXPIRY: process.env.JWT_EXPIRY || '3h',
  JWT_SECRET: process.env.JWT_SECRET || 'my-secret-jwt',
  // DATABASE_URL: process.env.DATABASE_URL || "postgresql://admin@localhost/flickshare",
  DATABASE_URL: 'postgresql://admin@localhost/flickshare',
  TEST_DATABASE_URL: 'postgresql://admin@localhost/flickshare-test'
};