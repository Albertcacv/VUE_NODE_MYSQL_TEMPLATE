const usersRouter = require('express').Router()

const User = require('../models/User')

usersRouter.get('/allusers', async (req, res) => {
  console.log('peticion realizada correctamente')
  const id = 1
  try {
    const users = await User.findAll()

    console.log(users)
    res.json(users)
  } catch (e) {
    console.log(e)
  }
  // res.json(users)
})

// usersRouter.post('/createUser', async (req, res) => {
//   const { name, email, password } = req.body

//   try {
//     const user = await User.create({
//       name,
//       email,
//       password,
//     })
//     res.json(user)
//   } catch (e) {
//     res.json(e)
//   }
// })

module.exports = usersRouter
