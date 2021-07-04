const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema ({
    name: {type: String , required: true, minlenght: 2},
    password: {type: String},
    nikname: {type: String},
    followers: {type: String},
    following: {type: String},
    messages: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Message',
        },
    ]
})




module.exports = mongoose.model('User', UserSchema)