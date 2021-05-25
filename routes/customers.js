const controller = require('../controllers/customers');
const validateToken = require('../utils').validateToken;

module.exports = (router) => {
    router.route('/customers/:id').get(controller.getCustomers);
           
};