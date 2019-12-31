const mongoose = require('mongoose');

var Employee = mongoose.model('Employee',{
    categories : {
        type :String 
    },
    item : {
        type :String
    },
    quntity:{
        type : Number
    },
    price : {
        type : Number
    }
})
module.exports = {
    Employee 
} ;