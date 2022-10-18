const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT||3000


app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'index.html'))
})
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname,'about.html'))

})
app.get('/blog', (req, res) => {
  res.sendFile(path.join(__dirname,'blog.html'))

})
app.get('/skill', (req, res) => {
  res.sendFile(path.join(__dirname,'skill.html'))

})
app.get('/skill/quotes', (req, res) => {
  res.sendFile(path.join(__dirname,'/skill/q.html'))

})
app.get('/skill/art', (req, res) => {
  res.sendFile(path.join(__dirname,'/skill/p.html'))

})
app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname,'contact.html'))

})
app.get('/sitemap', (req, res) => {
  res.sendFile(path.join(__dirname,'sitemap.xml'))

})

app.listen(port, () => {
  console.log(`VSMM World is listening on port ${port}`)
})