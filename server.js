const express = require('express')
const session = require('express-session')
const { engine } = require('express-handlebars')
const routes = require('./controllers')
const sequelize = require('./config/connection')
const SequelizeStore = require('connect-session-sequelize')(session.Store)

const app = express()
const PORT = process.env.PORT || 3001

const sesh = {
    secret: process.env.SECRET,
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
}

app.use(session(sesh))
app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', './views')
app.use(express.static('public'))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(routes)

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening on Port ${PORT}`))
})