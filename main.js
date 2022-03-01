require('dotenv').config()
require('./database/connection')

const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

//controllers
const userRouter = require('./controllers/user.controller')

const app = express()
//settings
app.set('port', process.env.PORT || 5000)

//Middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

//Routes
app.use('/api/users', userRouter)

app.listen(app.get('port'), () => {
  console.log(`Server is running on port ${app.get('port')}`)
})
