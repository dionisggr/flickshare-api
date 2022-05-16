module.exports = {
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  API_KEY: process.env.API_KEY || 'my-secret-admin',
  ADMIN_KEY: process.env.ADMIN_KEY || 'my-secret-admin',
  JWT_EXPIRY: process.env.JWT_EXPIRY || '3h',
  JWT_SECRET: process.env.JWT_SECRET || 'my-secret-jwt',
  DATABASE_URL:
    process.env.DATABASE_URL ||
      "postgres://bozxeqlvhhefnd:c4a56131095e735e3ae36ec0cdfdc34128fec37aeac8bf44b302ff4216f080cf@ec2-3-224-164-189.compute-1.amazonaws.com:5432/dc5i352cmdt649",
  TEST_DATABASE_URL: 'postgres://bozxeqlvhhefnd:c4a56131095e735e3ae36ec0cdfdc34128fec37aeac8bf44b302ff4216f080cf@ec2-3-224-164-189.compute-1.amazonaws.com:5432/dc5i352cmdt649'
};