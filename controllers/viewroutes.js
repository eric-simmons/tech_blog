const { Blog } = require('../models')

const router = require('express').Router()

router.get('/', async (req, res) => {
    try {
        let blogs = await Blog.findAll()
        blogs = blogs.map(blog => blog.get({ plain: true }))
        console.log(blogs)
        res.render('home', { blogs })
    }
    catch (err) {
        res.status(500).json(err)
    }
})
router.get('/blog/:id', async (req, res) => {
    try {
        let blog = await Blog.findByPk(req.params.id)
        blog = blog.get({ plain: true })
        res.render('blog', { blog })
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