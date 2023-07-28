const express = require("express");
const router = express.Router();
const {createPost, AllPost, onePost, editPost, deletePost} = require("../controllers/postController");
const { Upload } = require("../middlewares/Upload");
const{ Logger } = require('../middlewares/logger');

router.route('/newPost').post(Logger, Upload.single("image"), createPost);
router.route('/all_post').get(AllPost);
router.route('/one_post/:id').get(onePost).put(editPost).delete(deletePost);

module.exports = router;