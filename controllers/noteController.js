//const mongoose = require("mongoose");
const Note = require("../models/noteModel");

//obtener todas las notas
exports.getNotes = async(req,res) =>{
    try{
        const notes = await Note.find({})
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

// Obtener una nota especifica
exports.getNote = async(req,res) =>{
    try{
        const notes = await Note.findById(req.params.id)
        res.status(200).json(notes)
    }   catch (err) {
        console.log(err.message);
        res.status(400).json({
            status: "fail",
            message: err,
        });
    }
}

// Obtener una nota especifica
exports.deleteNote = async(req,res) =>{
    try{
        await Note.findByIdAndDelete(req.params.id)
        res.status(204).json({
            status: "success",
        });
    }   catch (err) {
        console.log(err.message);
        res.status(400).json({
            status: "fail",
            message: err,
        });
    }
}

