const { User, Blog } = require('../models')

const router = require('express').Router()

router.get('/', async (req, res) => {
    try {
        let blogs = await Blog.findAll()
        blogs = blogs.map(blog => blog.get({ plain: true }))
        //also checking if user is logged in
        res.render('home', { blogs,
        logged_in: req.session.logged_in })
    }
    catch (err) {
        res.status(500).json(err)
    }
})
router.get('/blog/:id', async (req, res) => {
    try {
        let blog = await Blog.findByPk(req.params.id)
        blog = blog.get({ plain: true })
        res.render('blog', { blog,
            logged_in: req.session.logged_in  })
    }
    catch (err) {
        res.status(500).json(err)
    }
})
router.get('/login', async (req, res) => {
    try {
        res.render('login')
    }
    catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router