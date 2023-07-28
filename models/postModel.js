const mongoose = require('mongoose');
const {Schema} = mongoose;

const postSchema = Schema ({
    post: {
        type: String,
        required: true
    },
    image: {
        type:String,
        required: true
    },
    categoryName: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    }
});

module.exports = mongoose.model('Post', postSchema);