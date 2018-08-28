module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/g-reads'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
}
}