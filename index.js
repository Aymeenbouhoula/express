const express = require('express')
const isAvariable = require('./middlewares/index')


const app = express()
app.use(isAvariable)
app.use(express.static('public'))

app.set('view engine', 'pug')
app.set('views','views')



app.get('/',(req,res) =>{
    res.render('index',{
        mytitle:'My App'
    })
})

app.get('/about',(req,res) => {
    res.render('about')
})


app.get('/contact',(req,res) => {
    res.render('contact')
})





app.listen(3000, () =>{
    console.log('server is running on port 3000 ...');
    
})