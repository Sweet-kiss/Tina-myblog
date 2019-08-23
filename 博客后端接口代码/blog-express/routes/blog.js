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

router.get('/detail', (req, res, next) => {
  const result = getDetail(req.query.id)
  return result.then(data => {
      res.json(
    new SuccessModel(data)
    )
  })
});

router.post('/update', (req, res, next) => {
  const result = updateBlog(req.query.id, req.body)
  return result.then(val => {
    if (val) {
      res.json(
        new SuccessModel()
      )
    } else {
      res.json(
        new ErrorModel('更新博客失败')              
      )
    }   
  })  
})

router.post('/del', (req, res, next) => {
  const author = req.session.username
  const result = delBlog(req.query.id, author)
  return result.then(val => {
    if (val) {
        res.json(
            new SuccessModel()
          )
      } else {
        res.json(
            new ErrorModel('删除客失败')             
        )
      }
  })    
})


module.exports = router;
