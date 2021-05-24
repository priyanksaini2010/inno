const controller = require('../controllers/profiles');
const validateToken = require('../utils').validateToken;

module.exports = (router) => {
    router.route('/profiles')
        .post(controller.add)
        .get(controller.get) 
        ; // @TODO Add token authentication
    router.route('/profiles/:profile')
        .patch(controller.update)
        .get(controller.getOne)
        .delete(controller.delete)
        ; // @TODO Add token authentication 
    
};