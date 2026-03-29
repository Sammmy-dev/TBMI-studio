require('dotenv').config()

const express = require('express')
const cors = require('cors')
const { connect } = require('./db')

const enrollmentsRouter = require('./routes/enrollments')
const contactsRouter = require('./routes/contacts')

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
  credentials: true,
}))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/enrollments', enrollmentsRouter)
app.use('/api/contacts', contactsRouter)

app.get('/health', (req, res) => {
  res.json({ status: 'ok' })
})

connect()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`)
    })
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB:', err)
    process.exit(1)
  })
