var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var user = new Schema({
    'firstname': String,
    'lastname': String,
    'phone': String,
    'email': String,
    'dateOfBirth': String,
    'address': String,

    'password': String
});


module.exports = mongoose.models.user || mongoose.model('user', user)

