const express = require('express')
const path = require("path");
const morgan = require("morgan");
const app = express();
const noteRouter = require("./routes/noteRoutes");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//Middlewares
app.use(morgan("dev"));
app.use(express.json());

//Configurando archivos estáticos
app.use(express.static(path.join(__dirname, "public")));

app.use("/", noteRouter);

module.exports = app;