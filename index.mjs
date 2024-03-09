import express from 'express'
import {create} from 'express-handlebars'
import conn from './db/conn.mjs'
import Task from './models/Task.mjs'

import tasksRoutes from './routes/tasksRoutes.mjs'

const app = express()

const exphbs = create()

app.engine('handlebars', exphbs.engine)
app.set('view engine', 'handlebars')

app.use(
    express.urlencoded({
        extended: true
    })
)
app.use(express.json())

app.use(express.static('public'))

app.use('/tasks', tasksRoutes)

conn.sync().then(()=> {
    app.listen(4000)
})
.catch((err)=> console.log(err))