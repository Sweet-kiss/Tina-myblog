const env = process.env.NODE_ENV //环境参数

let MYSQL_CONF

if (env === 'dev') {
   MYSQL_CONF = {
 	    host: 'localhost',
      user: 'root',
      password: '000000',
      port: '3306',
      database: 'test'
   }
}

if (env === 'production') {
   MYSQL_CONF = {
 	    host: 'localhost',
      user: 'root',
      password: '000000',
      port: '3306',
      database: 'test'
   }
}

module.exports = {
	MYSQL_CONF
}