const Post = require('../models/postModel');
const asyncHandler = require('../middlewares/asyncHandler');

//Creating new report
exports.createPost = asyncHandler(async(req, res)=>{
    const post = req.body.post;
    const filename = req.file.filename;
    const categoryName = req.body.categoryName  
    const data = await Post.create({
        post : post, 
        image: filename,
        categoryName: categoryName
    });
    res.status(200).json({
        success:true,
        data
    });
});

exports.AllPost = asyncHandler(async(req, res)=>{
    let Posts = await Post.find().populate('reportName');
    res.status(200).send({
        Posts
    })
});

exports.onePost = asyncHandler(async (req, res) => {
    const PostId = req.params.id.trim();
    const pro = await Post.findById(PostId);
    res.status(200).json({
        success: true,
        pro
    });
});

exports.editPost = asyncHandler(async(req, res)=>{
    let id = req.params.id;
    const filter = { _id: id };
    let duc = await Post.findOneAndUpdate(filter, req.body, {new:true});
    res.status(200).send({ 
        success:true,
        duc
    })
});

exports.deletePost = asyncHandler(async (req, res) => {
    const id = req.params.id;
    const deletedPost = await Post.findByIdAndDelete(id);
    if (deletedPost) {
        res.status(200).send({
        success: true,
        message: 'Post deleted successfully',
    })} 
    else {
        res.status(404).send({
        success: false,
        message: 'Post not found',
    })}
});