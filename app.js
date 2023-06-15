const express = require('express')
const blogs = require('./data/data.js')
const app = express()
app.set('view engine', 'ejs')
app.use(express.static('public'))
const PORT = process.env.PORT || 3000
app.get('/', (req, res)=>{

    res.render('index', {title: 'HOME', blogs})
})

app.get('/about', (req, res) =>{
    res.render('about', {title: 'About'})
})
app.get('/blogs/create', (req, res) =>{
    res.render('create', {title: 'Create A New Blog'})
})
app.use((req, res) =>{
    res.render('404', {title: '404'})
})

app.listen(PORT, console.log(`Eze listen on port ${PORT}`))

