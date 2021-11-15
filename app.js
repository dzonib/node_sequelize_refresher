const express = require('express')
const { sequelize, User } = require('./models')

const app = express()

app.use(express.json())

app.post('/users', async (req, res) => {
  const { name, email, role } = req.body

  try {
    const user = await User.create({ name, email, role })

    return res.json(user)
  } catch (error) {
    console.log('ERROR', error)
    return res.json(err)
  }
})

// async function main() {
// looks at model and creates database tables based on those models
//   In sync, if the table exists, if you dont pass anything, it will do nothing
// you need to pass force: true inside to make changes, it will rewrite model
//   if you pass alter: true, it will bring in new table with changes and leave old one

//   with force:

//   Executing (default): DROP TABLE IF EXISTS "users" CASCADE;
// Executing (default): CREATE TABLE IF NOT EXISTS "users" ("id"   SERIAL , "name" VARCHAR(255) NOT NULL, "email" VARCHAR(255)
// NOT NULL, "role" VARCHAR(255) NOT NULL,
//  "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL, "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL, PRIMARY KEY ("id"));

// await sequelize.sync({ force: true })

// drops all tables
// await sequelize.drop()
// drop tables that end with _test

// $ => match any that end with

// await sequelize.drop({match: /_test$/})

// }

// main()

app.listen({ port: 5000 }, async () => {
  console.log('SERVER UP ON http://localhost:5000')
  // each time we change model and sync with force, we will drop table
  // we use migrations for prod, not sync force
  await sequelize.sync({ force: true })
  await sequelize.authenticate()
  console.log('Connection has been established successfully.')
})
