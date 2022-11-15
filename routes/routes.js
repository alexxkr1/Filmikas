const MainController = require("../controllers/mainController");

module.exports = function(app) {
    app.route('/index')
    .get(MainController.getIndex)
}