const router = require('express').Router()
const User = require('../models/User')
const bcrypt = require('bcrypt')

// Register
router.post('/register', async (req, res) => {

    try {
        // Generate new password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        // Create new User
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
        })
        // Save user to mongoose database
        const user = await newUser.save();
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json(error);
    }
})

// LOGIN

router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({email: req.body.email,});
        !user && res.status(404).send("User not found")
        const validPasswor = await bcrypt.compare(req.body.password, user.password);
        !validPasswor && res.status(400).send("Wrong password")
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json(error);
    }

})


module.exports = router;