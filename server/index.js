require('dotenv').config()

const express = require('express')
const cors = require('cors')
const { connect } = require('./db')

const enrollmentsRouter = require('./routes/enrollments')
const contactsRouter = require('./routes/contacts')

const app = express()
const PORT = process.env.PORT || 3001
const allowedOrigins = (process.env.CLIENT_URLS || process.env.CLIENT_URL || 'http://localhost:3000,http://localhost:5173')
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean)

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      return callback(null, true)
    }

    return callback(new Error('Not allowed by CORS'))
  },
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
