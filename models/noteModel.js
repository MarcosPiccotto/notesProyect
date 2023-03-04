const mongoose = require("mongoose");
const {Schema,model} = mongoose

//Creación del Schema Post
const noteSchema = new Schema({
    title: {
        type: String,
        required: [true, "Una nota debe tener un título"],
    },
    content: {
        type: String,
        required: [true, "Una nota debe tener cotenido"],
    },
    date: {
        type: Date,
        required: [true, "Una nota debe tener una fecha"],
    },
    important: {
        type: Boolean,
    }
    
});

//Creación del modelo nota
const Note = model('note', noteSchema);

module.exports = Note;