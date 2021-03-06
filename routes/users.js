const controller = require('../controllers/users');
const validateToken = require('../utils').validateToken;

module.exports = (router) => {
    router.route('/users')
        .post(controller.add)
        .get(controller.getAll);
    router.route('/login')
        .post(controller.login);
    router.route('/users/:user')
        .put(controller.update)
        .delete(controller.delete);
};