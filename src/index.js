const express = require('express');
const morgan = require('morgan');
const taskRoutes = require('./routes/task.routes');

const app = express();

app.use(morgan('dev'))
app.use(express.json())

app.use(taskRoutes)

app.listen(3000)
console.log('listen in port 3000')