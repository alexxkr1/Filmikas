const MainController = require("../controllers/mainController");
const ProductController = require("../controllers/ProductController");

module.exports = function(app) {
    app.route('/index')
    .get(MainController.getIndex)
    app.route('/test')
    .get(MainController.getTest)
    app.route('/tests')
    .get(MainController.getTests)

    app.route('/product')
    .post(ProductController.CreatePost)
}