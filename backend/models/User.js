const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        username: String,
        password: String
    },
    products: [{
        type: Schema.Types.ObjectId,
        ref: "products"
    }]
});





const User = mongoose.model('User', userSchema);
module.exports = User;