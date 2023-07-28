const Category = require('../models/categoryModel');
const asyncHandler = require('../middlewares/asyncHandler');

exports.createCategory = asyncHandler(async(req, res)=>{
    const {category, admin } = req.body;
    const data = await Category.create({ category, admin });
    res.status(200).json({
        message: "Category created!",
        data
    });
});

exports.allCategory = asyncHandler(async(req, res)=>{
    let ports = await Category.find().populate('admin');
    res.status(200).send({
        ports
    })
});

exports.oneCategory = asyncHandler(async (req, res) => {
const CategoryId = req.params.id.trim();
const pro = await Category.findById(CategoryId).populate('admin');
res.status(200).json({
    success: true,
    pro
});
});

exports.editCategory = asyncHandler(async(req, res)=>{
    let id = req.params.id;
    const filter = { _id: id };
    let duc = await Category.findOneAndUpdate(filter, req.body, {new:true});
    res.status(200).send({ 
        success:true,
        duc
    })
});

exports.deleteCategory = asyncHandler(async (req, res) => {
    const id = req.params.id;
    const deletedCategory = await Category.findByIdAndDelete(id);
    if (deletedCategory) {
        res.status(200).send({
        success: true,
        message: 'Category deleted successfully',
    })} 
    else {
        res.status(404).send({
        message: 'Category not found',
        success: false,
    })}
});