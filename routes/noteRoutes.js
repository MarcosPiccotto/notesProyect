const express = require("express");
const router = express.Router();

const noteController = require("../controllers/noteController");

//Obtener todas las notas (Ver si queda asi)
router.route("/").get(noteController.getNotes);

//Crear una nota
router.route("/createNote").post(noteController.createNote);

// Modificar la id de la nota? al momento de mandarla por parametro
// obtener una nota directa (Al hacer click???)
router.route("/getNote/:id").get(noteController.getNote);

//Eliminar una nota
router.route("/deleteNote/:id").delete(noteController.deleteNote);

//Modificar una nota
// router.route("/editNote/:id").patch(noteController.editNote);


module.exports = router;