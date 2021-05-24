const controller = require('../controllers/tasks');
const validateToken = require('../utils').validateToken;

module.exports = (router) => {
    router.route('/tasks')
        .post(controller.add)
        .get(controller.get) 
        ; // @TODO Add token authentication
    router.route('/tasks/:task')
        .patch(controller.update)
        .get(controller.getOne)
        .delete(controller.delete)
        ; // @TODO Add token authentication 
    
};