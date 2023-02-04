const router = require("express").Router();
const User = require("../Models/User");
const bcrypt = require("bcrypt");

// Register

router.post("/register", async (req, res) => {

    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);

    const userEmail = await User.findOne({ email: req.body.email })
    if (userEmail) {
        res.status(400).json("This email is already registered")
        return;
    };

    const userPhoneNumber = await User.findOne({ phoneNumber: req.body.contact })
    if (userPhoneNumber) {
        res.status(400).json("This Phone Number is already registered")
        return;
    };

    const userCitizenNumber = await User.findOne({ citizenNumber: req.body.citizennum })
    if (userCitizenNumber) {
        res.status(400).json("This Citizen Number is already registered")
        return;
    };

    try {
        const newUser = new User({
            firstName: req.body.fname,
            lastName: req.body.lname,
            email: req.body.email,
            password: hashedPass,
            province: req.body.province,
            phoneNumber: req.body.contact,
            citizenNumber: req.body.citizennum,
            gender: req.body.gender,
        });

        const user = await newUser.save();
        res.status(200).json(user);
    }

    catch (err) {
        res.status(500).json(err)
    }
})

// Login

router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ userName: req.body.userName })
        if (!user) {
            res.status(400).json("wrong username")
            return;
        };

        const validated = await bcrypt.compare(req.body.password, user.password);
        if (!validated) {
            res.status(400).json("wrong password");
            return;
        }

        const { password, ...others } = user._doc;

        res.status(200).json(others)
    } catch (err) {
        res.status(500).json(err)
    }
});

module.exports = router