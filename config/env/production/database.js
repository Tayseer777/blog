const {parse} =  require('pg-connection-string')
module.exports = ({ env }) => {
    const {host, port, database, user, password} = parse(env('HEROKU_POSTGRESQL_GOLD_URL'))
    return({
    connection: {
      client: 'postgres',
      connection: {
        host,
        port,
        database,
        user,
        password,
      },
      debug: false,
    },
  })};