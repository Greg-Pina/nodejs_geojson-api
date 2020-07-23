const mongoose = require('mongoose')

const StoreSchema = new mongoose.Schema({
	storeID: {
		type: String,
		required: [true, 'Please add in a store ID'],
		unique: true,
		trim: true,
		maxlength: [15, 'Store ID must be less than 15 characters long'],
	},
	address: {
		type: String,
		required: [true, 'Please add an address'],
	},
	location: {
		type: {
			type: String,
			enum: ['Point'],
		},
		coordinates: {
			type: [Number],
			index: '2dsphere',
		},
		formattedAddress: String,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
})

module.exports = mongoose.model('Store', StoreSchema)
