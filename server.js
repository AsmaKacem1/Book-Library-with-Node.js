const express= require('express')
const app=express()
const path=require('path')

app.use(express.static(path.join(__dirname,'assets')))
app.set('view engine','ejs')
app.set('views','views')

app.get('/',(req,res,next)=>{
    res.render('index')

})

app.get('/contact',(req,res,next)=>{
    res.render('contact')
})

app.get('/about',(req,res,next)=>{
    res.render('about')
})

app.get('/books',(req,res,next)=>{
    res.render('books')
})

app.get('/login',(req,res,next)=>{
    res.render('login')
})

app.get('/register',(req,res,next)=>{
    res.render('register')
})


app.listen(3000,()=>console.log('server running'))