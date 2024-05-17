const
    express = require('express'),
    app = express(),
    port = 5000,
    expressLayouts = require('express-ejs-layouts'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose')

// DB Models

const
    Project = require('./models/Project.js')

app.use(express.json());
app.use(express.static('public'))

app.use(expressLayouts)
app.set('view engine', 'ejs')


app.use(bodyParser.urlencoded({ extended: true }));

// Routes
// app.get('/', (req, res) => {
//     res.render('landing', { title: 'Home Page' })
// })

app.get("/", async (req, res) => {
    return res.json({
        name: {
            first: "Jonny",
            last: "O",
        },
        height: 72,
        weight: 185 
    });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About Page'})
})
app.get('/projects', async (req, res) => {
    const
        projects = await Project.find()
    res.render('projects', { title: 'Project Page', projects})
})

app.post('/projects/new/add', (req, res) => {
    const data = req.body
    console.log(data)
    const newProject = new Project(data)
    newProject.save()

    res.redirect('/projects')
})

app.get('/projects/edit/delete/:id', async (req, res) => {
    const id = req.params.id
    await Project.findByIdAndDelete(id)
    res.redirect('/projects')
})

app.get('/vr', (req, res) => {
    res.render('vr', { title: 'VR Page'})
})

// Listen on Port 5000
const start = async () => {
    try {
        await mongoose.connect(
            "mongodb+srv://widespreadspace:ADlWft4smFQuzQKR@cluster0.8zvhq6y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
        );
        app.listen(port, () => console.info(`App listening on port ${port}`))

    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

start();

// ADlWft4smFQuzQKR

// mongodb+srv://widespreadspace:ADlWft4smFQuzQKR@cluster0.8zvhq6y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0