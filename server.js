const
    express = require('express'),
    app = express(),
    port = 5000,
    expressLayouts = require('express-ejs-layouts'),
    bodyParser = require('body-parser')


app.use(express.static('public'))

app.use(expressLayouts)
app.set('view engine', 'ejs')


app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.get('', (req, res) => {
    res.render('landing', { title: 'Home Page' })
})

app.get('/about', (req, res) => {
    res.render('about', { title: 'About Page'})
})
app.get('/projects', (req, res) => {
    res.render('projects', { title: 'Project Page'})
})

app.post('/projects/new/add', (req, res) => {
    const data = req.body
    console.log(data)

    res.redirect('/projects')
})



app.get('/vr', (req, res) => {
    res.render('vr', { title: 'VR Page'})
})

// Listen on Port 5000
app.listen(port, () => console.info(`App listening on port ${port}`))