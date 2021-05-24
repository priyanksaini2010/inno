const controller = require('../controllers/proxies');
const validateToken = require('../utils').validateToken;

module.exports = (router) => {
    router.route('/proxies')
        .post(controller.add)
        .get(controller.get) 
        ; // @TODO Add token authentication
    router.route('/proxies/:proxy')
        .put(controller.update)
        .delete(controller.delete)
        ; // @TODO Add token authentication 
    
};