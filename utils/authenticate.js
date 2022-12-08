const authenticate = (req, res, next) => {
   !req.session.logged_in ? res.redirect('/login') : next()
}

module.exports = authenticate