const mongoose = require("mongoose")

const connectDb = async () => {
	try {
		await mongoose.connect("mongodb+srv://hedayatrk30:tangent30@cluster0.vi7yzes.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
		console.log(`Database running on ${mongoose.connection.host}`)
	} catch (error) {
		console.log(error)
	}
}

module.exports = connectDb
