const controller = require('../controllers/taskgroups');
const validateToken = require('../utils').validateToken;

module.exports = (router) => {
    router.route('/task-groups')
        .post(controller.add)
        .get(controller.get) 
        ; // @TODO Add token authentication
    router.route('/task-groups/:group')
        .put(controller.update)
        .get(controller.getOne)
        .delete(controller.delete)
        ; // @TODO Add token authentication 
    
};