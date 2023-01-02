const router = require("express").Router()
const { Blog } = require("../../models");
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {

  try {
    const newBlog = await Blog.create({
      ...req.body,
      user_id: req.session.user_id
    })
    res.status(200).json(newBlog)
  } catch (error) {
    res.status(400).json(error)
  }
})

router.get('/', async (req, res) => {
  try {
    const blogData = await Blog.findAll()
    res.render(blogData)
  }
  catch (err) {
    console.log(err);
    res.status(500).json(err);
  };
});


router.delete('/:id', withAuth, async (req, res) => {
  try {
    const blogData = await Blog.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });
    res.status(200).json(blogData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router

