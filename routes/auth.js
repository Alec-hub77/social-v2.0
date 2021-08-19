const router = require('express').Router()
const User = require('../models/User')

// Register
router.get('/register', async (req, res, next) => {
    const user = await new User({
        username: "John Doe",
        email: "jdoe@mail.com",
        password: "123456"
    },)

    await user.save().catch(next);
    res.send("ok")
})


module.exports = router;