const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { Schema } = mongoose;

const adminSchema = Schema({
    Id: {
        type: Number,
        autoIncrement: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        math:[/[^\s@]+@[^\s@]+\.[^\s@]+/gi, 'email buruu bna']
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['User', 'Admin'],
        default: 'user'
    }
});
// schema dotor udamshina
adminSchema.pre('save', async function () {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});
// uusgesen model dotor udamshij ochno
adminSchema.methods.CheckPassword = async function(password){
    const check = await bcrypt.compare(password, this.password);
    return check;
};

module.exports = mongoose.model('Admin', adminSchema);
