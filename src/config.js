module.exports = {
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  API_KEY: process.env.API_KEY || 'my-secret-key',
  DATABASE_URL: process.env.DATABASE_URL || "postgresql://admin@localhost/flickshare",
  TEST_DATABASE_URL: "postgresql://admin@localhost/flickshare-test"
};