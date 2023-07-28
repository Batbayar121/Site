const Admin = require('../models/adminModel');
const asyncHandler = require('../middlewares/asyncHandler');
const {generateToken} = require('../utis/tokenGenerate');


exports.register = asyncHandler(async (req, res) =>{
    const createAdmin = await Admin.create(req.body);
    res.status(200).json({
        success: true,
        createAdmin
    })
});

exports.login = asyncHandler(async (req, res)=>{
    const {email, password } = req.body;
    const findAdmin = await Admin.findOne({email: email});
    if(!findAdmin){
        res.status(403).json({
            success: false,
            message: 'nuuts ug email-ee shalgana uu'
        });
    };
    const check = await findAdmin.CheckPassword(password);
    const token = generateToken(findAdmin._id);
    res.status(200).json({
        success: true,
        findAdmin,
        token
    });
    if(!check){
        res.status(403).json({
            success: false,
            message: 'nuuts ug email-ee shalgana uu'
        });
    };
});
