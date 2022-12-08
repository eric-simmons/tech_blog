const authenticate = (req, res, next) => {
   
   !req.session.logged_in ? res.redirect('/login') : next()
   
   
   
   
    // if (!req.session.logged_in) {
    //     res.redirect('/login')
    // } else{
    //     next()
    // }
}

module.exports = authenticate