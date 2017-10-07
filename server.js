const express = require('express') 
/* const กำหนดวิธีการเก็บตัวแปร เมื่อเก็บไปแล้วจะไม่สามารถแก้ไขค่าได้เลย เก็บอยู่ในชื่อตัวแปรว่าexpress */
const { twig } = require('twig')
//หรือ การประกาศตัวแปร นั้นแล
const app = express() 
/* รันexpress เก็บในตัวแปรชื่อว่าapp */
app.set('view engine','twig')

const homeController = require('./controllers/home.controller')
const newsController = require('./controllers/news.controller')

app.get('/',homeController.index)
app.get('/news',newsController.index)

app.use('/assets',express.static(__dirname + '/static/assets',{
	maxAge: 86400000
}))
//ให้หาไฟล์assetsเจอ

// app.get('/', function(req,res){
// 	res.send('Hello')
// })
// app.get('/home', function(req,res){
// 	res.send('Palm')
// })

/* รับ / แล้วส่งคำว่า Hello ไป */
app.listen(8000,function(err){
	console.log('server is running on port 8000')
})
/* 8000 คือ port console.logแสดงค่าตัวที่รัน */

/* cmd
yarn init แล้วenter เรื่อยๆจนกว่าจะสำเร็จ
yarn add express แล้วEnter
เป็นการโหลดตัวexpress เพื่อนำมาสร้างเซิฟเวอร์เว็บเรา */