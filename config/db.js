const mongoose = require('mongoose')

const connectDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGO_URI, {
			useCreateIndex: true,
			useNewUrlParser: true,
			useFindAndModify: true,
			useUnifiedTopology: true,
		})
		console.log(`MongoDB connected: ${conn.connection.host}`)
	} catch (error) {
		console.error(err)
		process.exit(1)
	}
}

module.exports = connectDB
