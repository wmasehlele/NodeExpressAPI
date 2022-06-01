const Joi = require('joi')
const express = require('express')
const app = express()


app.use(express.json())

const courses = [
    { id: 1, name: 'Node JS' },
    { id: 2, name: 'HTML' },
    { id: 3, name: 'CSS' }
]

app.get('/', ( req, res) => {
    res.send('Hello World')
});

app.get('/api/courses', ( req, res) => {
    res.send(courses)
});

app.get('/api/courses/:id', ( req, res) => {
    const course = courses.find( c => c.id === parseInt(req.params.id) )
    if (!course) { // 404
        res.status(404).send('The couse was not found')
        return;
    }
    res.send(course)
});

app.post('/api/courses', ( req, res) => {
    const { error } = validateCourse(req.body)    
    if (error) {
        res.status(400).send(error.details[0].message)
        return;
    }
    const course = {
        id: courses.length + 1,
        name: req.body.name
    }
    courses.push(course)
    res.send(courses)
});

app.put('/api/courses/:id', (req, res) => {
    const course = courses.find( c => c.id === parseInt(req.params.id) )
    if (!course) { // 404
        res.status(404).send('The couse was not found')
        return;
    }    
    const { error } = validateCourse(req.body)
    if (error) {
        res.status(400).send(error.details[0].message)
        return;
    }
    course.name = req.body.name
    res.send(courses)
})

app.delete('/api/courses/:id', (req, res) => { 
    const course = courses.find( c => c.id === parseInt(req.params.id) )
    if (!course) { // 404
        res.status(404).send('The couse was not found')
        return;        
    }    
    const index = course.indexOf(course)
    courses.splice(index, 1)
    res.send(courses)
})

function validateCourse (course) {
    const schema = {
        name: Joi.string().min(3).required()
    }
    return Joi.validate(course, schema)    
}

// PORT
const port = process.env.PORT || 3000 
app.listen(port, () => console.log(`Listening on port ${port}...`))
