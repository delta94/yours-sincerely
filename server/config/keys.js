module.exports = {
  nodeEnv: process.env.NODE_ENV,
  port: process.env.PORT,
  auth: {
    jwtSecret: process.env.JWT_SECRET,
  },
  db: {
    prismaEndpoint: process.env.PRISMA_ENDPOINT,
    prismaSecret: process.env.PRISMA_SECRET,
  },
  google: {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  },
  aws: {
    key: process.env.AWS_ACCESS_KEY_ID,
    secret: process.env.AWS_SECRET_ACCESS_KEY,
  },
};
