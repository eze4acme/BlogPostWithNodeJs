const express = require('express')
const blogs = require('./data/data.js')
const morgan = require('morgan')
const PORT = process.env.PORT || 3000
const app = express()
app.use(express.static('public'))
app.set('view engine', 'ejs')

app.get('/', (req, res)=>{

    res.render('index', {title: 'HOME', blogs})
})

app.get('/about', (req, res) =>{
    res.render('about', {title: 'About'})
})
app.get('/blogs/create', (req, res) =>{
    res.render('create', {title: 'Create A New Blog'})
})
app.all('*', (req, res) =>{
    res.status(404).render('404', {title: '404'})
})

app.listen(PORT, console.log(`Eze listening on port ${PORT}`))

