const controller = require('../controllers/products');
const validateToken = require('../utils').validateToken;

module.exports = (router) => {
    router.route('/products/:id').get(controller.getProducts);
           
};