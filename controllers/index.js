const router = require('express').Router()
const apiRoutes = require('./api')
const viewRoutes = require('./viewroutes')

//router.use('/api', apiRoutes)
router.use(viewRoutes)


module.exports = router