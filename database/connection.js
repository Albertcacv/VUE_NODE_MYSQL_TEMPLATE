const { Sequelize } = require('sequelize')

const user = process.env.DB_USER
const password = process.env.DB_PASSWORD

const sequelize = new Sequelize('inso_test', user, password, {
  host: 'localhost',
  dialect: 'mysql',
})
//   `mysql://127.0.0.1:3306/?user=${user}&password=${password}/inso_test`
// )

try {
  sequelize
    .authenticate()
    .then(console.log('Connection has been established successfully.\n'))
} catch (err) {
  console.error('Unable to connect to the database:', err)
}

module.exports = sequelize
