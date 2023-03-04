const app = require("./index");
const mongoose = require("mongoose");
// const dotenv = require("dotenv");

const port = 2500

const connectionString = 'mongodb+srv://marcospiccotto:A24smgYOzj11Asvx@cluster0.z3ztv0d.mongodb.net/?retryWrites=true&w=majority'

// no me funciona
// dotenv.config({ path: "./config.env" });
// const DB = process.env.DATABASE.replace("<PASSWORD>", process.env.DATABASE_PASSWORD);

//Conexión al cloud de Mongodb Atlas
mongoose.connect(connectionString)
	.then(() => {
		console.log('Database Conected');
	}).catch(err => {
		console.log(err);
	})

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})