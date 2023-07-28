const mongoose = require('mongoose');
const {Schema} = mongoose;

const categorySchema = Schema ({
    id: {
        type: Number
    },
    category: {
        type: String,
        required: true,
        },
    admin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Admin'
    }
}
);  


module.exports = mongoose.model('Category', categorySchema);