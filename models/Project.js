const mongoose = require('mongoose')

const projectSchema = mongoose.Schema({
    name: String,
	description: String,
	created: { 
		type: Date,
		default: Date.now
	}
})

const Project = mongoose.model('Project', projectSchema)
module.exports = Project