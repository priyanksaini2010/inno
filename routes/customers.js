const controller = require('../controllers/customers');
const validateToken = require('../utils').validateToken;

module.exports = (router) => {
    // router.route('/customers/:id').get(controller.getCustomers);
    // router.route('/customers').post(controller.add);
    // router.route('/customers/:id').delete(controller.delete);

        router.route('/customers')
            .post(controller.add)
            .get(controller.getAll);
        router.route('/customers/:id')
            .get(controller.getCustomers)
            .delete(controller.delete);
    
           
};
