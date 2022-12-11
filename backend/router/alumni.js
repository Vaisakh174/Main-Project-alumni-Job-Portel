const express = require("express");
const router = express.Router();
const alumniData = require("../models/alumni/alumniSchema.js")

//enter your code here 












//add data (post)
router.post('/new' , async (req, res) => {

    try {
        const DateNow = Date.now();
        let item = {

            name: req.body.name,
            email: req.body.email,
            mobile: req.body.mobile,
            course: req.body.course,
            qualification: req.body.qualification,
            batch: req.body.batch,
            placement: req.body.placement,
            password: req.body.password,
            Date: Date(DateNow).toString()

        }
        const newdata = new alumniData(item);
        const savedata = await newdata.save();
        // console.log(`from post method ${item.Date}`);
        res.send(savedata);

    } catch (error) {
        console.log(`error from get method ${error}`);
    }

});




module.exports = router;