const mongo = require('mongoose');

module.exports = mongo.model('Guild', new mongo.Schema({
    Channel: String
}))