const controller = require('../controllers/subscriptions');
const validateToken = require('../utils').validateToken;

module.exports = (router) => {
    router.route('/subscriptions/:id').get(controller.getSubscriptions);
    router.route('/subscriptions/:id').delete(controller.delete);           
    router.route('/subscriptions').get(controller.getAll);    
    router.route('/subscriptions').post(controller.add);   
};