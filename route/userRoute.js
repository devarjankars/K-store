const express = require('express')
const router = express.Router()
const controllers=require('../controllers/userControllers');
const sequelize= require('../utils/database');
const store= require('../models/store')

router.get('/',controllers.getPage);
router.get('/buyTwo/:id',controllers.buytwo)
router.get('/buyOne/:id',controllers.buyone)

router.post('/addItem',controllers.postItem)
router.get('/getAllItems', controllers.getAllItems);


// router.get ('/buy1', controller.)




module.exports=router;