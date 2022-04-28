const express = require('express')
const app = express()


app.set('view Engine', 'ejs')
app.use(express.static('public'))
app.listen(3000)