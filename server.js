const path = require('path')
const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const connectDB = require('./config/db')

// Load env vars
dotenv.config({ path: './config/config.env' })

// Bring in the database
connectDB()

const app = express()

// Body parser middleware
app.use(express.json())

// Enable cors
app.use(cors())

// Set static folder
app.use(express.static(path.join(__dirname, 'public')))

// Routes
app.use('/api/v1/stores', require('./routes/stores'))

const PORT = process.env.PORT || 5000

app.listen(PORT, () =>
	console.log(`Server running in ${process.env.NODE_ENV} mode on port: ${PORT}`)
)
