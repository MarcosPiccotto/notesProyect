const mongoose = require("mongoose");
const Note = require("../models/noteModel");

//obtener todas las notas
exports.getNotes = async(req,res) =>{
    try{
        const notes = await Note.find({})
        console.log(notes);
        res.status(200).json(notes)
    }   catch (err) {
        console.log(err.message);
        res.status(400).json({
            status: "fail",
            message: err,
        });
    }
}

//Creamos una nueva nota
exports.createNote = async (req,res) => {
    try {
        const newNote = await Note.create(req.body);
        // mongoose.connection.close();

        // Agregar el render o alerta 
        res.status(201).json({
            status: "success",
            data: {
                Note: newNote,
            },
        });
    } catch (err) {
        console.log(err.message);
        res.status(400).json({
            status: "fail",
            message: err,
        });
    }
}

