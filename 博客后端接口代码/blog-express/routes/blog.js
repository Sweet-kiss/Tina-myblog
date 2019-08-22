var express = require('express');
var router = express.Router();
const {
	getList,
	getDetail,
	newBlog,
	updateBlog,
	delBlog
} = require('../controller/blog')

const { SuccessModel, ErrorModel } = require('../model/resModel')

/* GET home page. */
router.get('/list', (req, res, next) => {
   let author = req.query.author || ''
   const keyword = req.query.keyword || ''

   if(req.query.isadmin) {
        //管理员界面
        console.log(req.session.username,"mmm")
        if(req.session.username == null) {
         //未登录
         res.json(
           new ErrorModel('未登录')
          )
          return
        }
      //强制查询自己的博客
      author = req.session.username
   }

   const result = getList(author, keyword)
   return result.then(listData => {
      res.json(
        new SuccessModel(listData)
      )
   })   
});


//插入新blog
router.post('/new', (req, res, next) => {
   req.body.author = req.session.username
   const result = newBlog(req.body)
   return result.then(data => {
       res.json(
          new SuccessModel(data)
       )
   })
})




module.exports = router;
