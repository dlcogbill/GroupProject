const BetController = require(`../controllers/bet.controller`);

module.exports = (app) => {
    app.get(`/api`, BetController.index);
}