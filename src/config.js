module.exports = {
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  API_KEY: process.env.API_KEY || 'my-secret-admin',
  ADMIN_KEY: process.env.ADMIN_KEY || 'my-secret-admin',
  JWT_EXPIRY: process.env.JWT_EXPIRY || '3h',
  JWT_SECRET: process.env.JWT_SECRET || 'my-secret-jwt',
  DATABASE_URL:
    process.env.DATABASE_URL ||
      "postgres://fghlypqkqpnvnc:72e965b7aeb419afb053a08441c8e27c7029b3eb005a7812f172d61ea610e444@ec2-54-165-184-219.compute-1.amazonaws.com:5432/df60cg0sot72h4",
  TEST_DATABASE_URL: 'postgres://fghlypqkqpnvnc:72e965b7aeb419afb053a08441c8e27c7029b3eb005a7812f172d61ea610e444@ec2-54-165-184-219.compute-1.amazonaws.com:5432/df60cg0sot72h4'
};