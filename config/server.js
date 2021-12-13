module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 8060),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '23287cd0b2aea4af40a4349f4540ab6e'),
    },
  },
});
