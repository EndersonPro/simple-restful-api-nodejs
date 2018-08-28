/* CONFIGURANDO RUTAS DE MI API  */
module.exports = app => {
    const User = require('../controllers/Controller')

    app.route('/user')
    .get(User.all_user)
    .post(User.create_user);

    app.route('/user/:id')
    .get(User.user)
    .post(User.update)
    .delete(User.delete);

}