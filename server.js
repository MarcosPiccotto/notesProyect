require("dotenv").config();
const app = require("./index");
const mongoose = require("mongoose");

const connectionString = process.env.MONGO_DB;

//Conexión Mongodb 
mongoose.connect(connectionString)
	.then(() => {
		console.log('Database Conected');
	}).catch(err => {
		console.log(err);
	})

app.listen(process.env.PORT, () => {
	console.log(`Example app listening on port ${process.env.PORT}`)
})