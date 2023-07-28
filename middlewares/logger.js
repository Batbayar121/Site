const jwt = require('jsonwebtoken');
const Admin = require('../models/adminModel');
const asyncHandler = require('./asyncHandler');

exports.Logger = asyncHandler(async (req, res, next) => {
    const testToken = req.headers.authorization;
    let token;
    if (!testToken) {
        return res.status(400).json({
            success: false
        });
    }
    token = testToken.split(' ')[1];
    const verifiedToken = jwt.verify(token, process.env.JWT_SECRET);
    const admin = await Admin.findOne({ _id: verifiedToken.id });
        req.userId = admin.id;
        req.userEmail = admin.email;
    next();
});
