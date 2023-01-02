const { User, Blog, Comment } = require('../models')
const router = require('express').Router()

router.get('/', (req, res) => {
    try {
        res.render('home', {
            logged_in: req.session.logged_in
        })
    }
    catch (error) {
        res.status(500).json(error)
    }
})

router.get('/dashboard', (req, res) => {
    try {
        res.render('dashboard', {
            logged_in: req.session.logged_in
        })
    }
    catch (error) {
        res.status(500).json(error)
    }
})


//serve up blogs on homepage
router.get('/home', async (req, res) => {
    try {
        let blogs = await Blog.findAll({
            include: [
                {
                    model: Comment,
                    include: [{ model: User }]
                },
                { model: User }
            ],
            order: [['date_created', 'ASC']]
        })


        //serialize post data
        blogs = blogs.map(blog => {
            const blogData = blog.get({ plain: true })
            return {
                ...blogData,
                commentContent: blogData.comments.map(comment => {
                    return comment.content
                })
            }
        })

        //pass blogs and session flag into home template
        res.render('home', {
            blogs,
            user_id: req.session.user_id,
            logged_in: req.session.logged_in
        })
    } catch (error) {
        res.status(500).json(error)
    }
})

//serve up blog by id 
router.get('/blog/:id', async (req, res) => {
    try {




        let blog = await Blog.findByPk(req.params.id,
            {
                include: [{
                    model: Comment
                }]
            })
        blog = blog.get({ plain: true })

        console.log(blog)
        //         // let comments = await Comment.findAll({
        //         //     where: {
        //         //         blog_id: req.params.id
        //         //     },
        //         // })
        //         // comments = comments.map(comment => comment.get({ plain: true }))

        res.render('blog', {
            blog,
            // comments,
            logged_in: req.session.logged_in
        })
    }
    catch (error) {
        res.status(500).json(error)
    }
})




router.get('/login', async (req, res) => {
    try {
        res.render('login')
    }
    catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router