const express = require('express');
const router  = express.Router();
const {createCategory, allCategory, oneCategory, editCategory, deleteCategory } = require('../controllers/categoryController');
const{ Logger } = require('../middlewares/logger');

router.route('/newCategory').post(Logger, createCategory);
router.route('/all_Categories/').get(allCategory);
router.route('/one_Category/:id').get(oneCategory).put(editCategory).delete(deleteCategory);

module.exports = router;