const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 8000

app.use(cors())

const courses = require('./data/courses.json')

app.get('/', (req, res) => {
  res.send('Cognition Learning Center is Live!')
})

app.get('/courses', (req, res) => {
  res.send(courses)
})

app.get('/courses/:id', (req, res) => {
  const id = req.params.id
  const course = courses.find((n) => n.id == id)
  res.send(course)
})

app.listen(port, () => {
  console.log('Cognition is running on port', port)
})
