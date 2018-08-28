const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/* Esquema de un usuario */
const UserSchema = new Schema({
  name: {
    type: String,
    required: "Por favor introduzca un nombre"
  },
  username: {
    type: String,
    required: "Por favor introduzca un nombre de usuario"
  },
  profession: {
    type: [
      {
        type: String,
        enum: ['Estudiante', 'Docente', 'Trabajador']
      }
    ],
    default:['Estudiante']
  },
  email: {
    type: String,
    required: "Introduzca un correo electronico"
  },
  Created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('User', UserSchema);
