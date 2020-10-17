var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
        orm.all("burgers", function(res) {
            cb(res);
        })
    },
    create: function(cb) {
        orm.create("burgers", function(res) {
            cb(res);
        })
    },
    update: function(objColVals, condition, cb) {
        orm.update("burgers", function(res) {
            cb(res);
        });
    }
};

module.exports = burger;