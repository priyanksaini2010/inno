const controller = require('../controllers/products');
const validateToken = require('../utils').validateToken;

module.exports = (router) => {
    //router.route('/products/:id').get(controller.getProducts);
    router.route('/products')
        .post(controller.add)
        .get(controller.getAll);
    router.route('/products/:id')
        .get(controller.getProducts)
        .delete(controller.delete);
           
};