const { exec } = require('../db/mysql')
//const { genPassword } = require('../utils/cryp')

const login = (username, password) => {
    username = escape(username)

   // 生成加密密码
   // password = genPassword(password)
   // password = escape(password)

   const sql = `
     select username, realname from users where username='${username}' and password = '${password}'
   `
   console.log(sql,"登录语句")
   return exec(sql).then(rows => {
   	  return rows[0] || {}
   })
}

module.exports = {
  login
}