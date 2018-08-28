const moongose = require("mongoose");
User = moongose.model("User");


/* Mostrar todos los usuarios */
exports.all_user = (req, res) => {
  User.find({}, (err, user) => {
    err ? res.send(err) : res.json(user);
  });
};

/* Crea un nuevo usuario */
exports.create_user = (req, res) => {
  var new_user = new User(req.body);
  new_user.save((err, user) => {
    err ? res.send(err) : res.json(user);
  });
};

/* Busca un usuario por id */
exports.user = (req, res) => {
  User.findById(req.params.id, (err, user) => {
    err ? res.send(err) : res.json(user);
  });
};


/* Busca uno por id y lo actualiza */
exports.update = (req, res) => {
  User.findOneAndUpdate(req.params.id, req.body, { new: true }, (err, user) => {
    err ? res.send(err) : res.json(user);
  });
};

/* Metodo para eliminar */
exports.delete = (req, res) => {
  User.remove({ _id: req.params.id }, (err, user) => {
    err ? res.send(err) : res.json(user);
  });
};
