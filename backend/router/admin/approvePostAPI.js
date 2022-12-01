const express = require("express");
const router = express.Router();
const approvePost = require("../../models/admin/approvePost.js");
const approvedPost = require("../../models/admin/approvedpost.js");
const jwt = require('jsonwebtoken')


//middleware
function verifytoken (req, res, next) {
    console.log('headers=', req.headers.authorization);
    if (!req.headers.authorization) {
        return res.status(401).send('Unautherized request');
    }
    let token = req.headers.authorization.split(' ')[1];
    if (token == 'null') {
        return res.status(401).send('Unautherized request');
    }
    let payload = jwt. verify(token , 'secretkey');
    console.log("payload=", payload);
    if (!payload) {
        return res.status(401).send('Unautherized request');
    }
    console.log("payload.subject=", payload.subject);

    req.userId = payload.subject;
    next();

}

//get all list (get) for data
router.get('/getall', async (req, res) => {

    try {
        let list = await approvePost.find();

        console.log(`from get method ${list}`);
        res.send(list);
    }
    catch (error) {
        console.log(`error from get method ${error}`);

    }

});


// fetch single data (get)
router.get('/getsingle/:id', async (req, res) => {

    try {
        let id = req.params.id;
        const singledata = await approvePost.findById(id);
        console.log(`from get with id method ${singledata}`);
        res.send(singledata)
    } catch (error) {
        console.log(`error from get method ${error}`);
    }

});



//add data (post)
router.post('/post' , async (req, res) => {

    try {
        let item = {

            Jobname: req.body.Jobname,
            Qualifications: req.body.Qualifications,
            Experience: req.body.Experience,
            JobID: req.body.JobID,
            Resfile: req.body.Resfile,
            Alumni_name: req.body.Alumni_name,
            Alumni_qualification: req.body.Alumni_qualification,
            Alumni_ID: req.body.Alumni_ID,
            Alumni_Experience: req.body.Alumni_Experience,
            Alumni_course: req.body.Alumni_course,
            Alumni_branch: req.body.Alumni_branch
           
        }
        const newdata = new approvePost(item);
        const savedata = await newdata.save();
        // console.log(`from post method ${savedata}`);
        res.send(savedata);

    } catch (error) {
        console.log(`error from get method ${error}`);
    }

});

//add data when approved (post)
router.post('/posted' , async (req, res) => {

    try {
        let item = {

            Jobname: req.body.Jobname,
            Qualifications: req.body.Qualifications,
            Experience: req.body.Experience,
            JobID: req.body.JobID,
            Resfile: req.body.Resfile,
            Alumni_name: req.body.Alumni_name,
            Alumni_qualification: req.body.Alumni_qualification,
            Alumni_ID: req.body.Alumni_ID,
            Alumni_Experience: req.body.Alumni_Experience,
            Alumni_course: req.body.Alumni_course,
            Alumni_branch: req.body.Alumni_branch
           
        }
        const newdata = new approvedPost(item);
        const savedata = await newdata.save();
        // console.log(`from post method ${savedata}`);
        res.send(savedata);

    } catch (error) {
        console.log(`error from get method ${error}`);
    }

});

// delete data
router.delete('/delete/:id', async (req, res) => {

    try {
        let id = req.params.id;
        let deletedata = await approvePost.findByIdAndDelete(id);
        console.log(`from delete method ${deletedata}`);
        res.send(deletedata);

    } catch (error) {
        console.log(`error from get method ${error}`);
    }

});

// update data
router.put('/update', async (req, res) => {

    try {
        let id = req.body._id;
        let item = { //remove 'data' from below if we not pass data object from frontend

            Jobname: req.body.data.Jobname,
            jobID: req.body.data.jobID,
            Resfile: req.body.data.Resfile,
            Alumni_name: req.body.data.Alumni_name,
            Alumni_qualification: req.body.data.Alumni_qualification,
            Qualifications: req.body.data.Qualifications,
            Experience: req.body.data.Experience,
            Alumni_Experience: req.body.data.Alumni_Experience,
            Alumni_course: req.body.data.Alumni_course,
            Alumni_branch: req.body.data.Alumni_branch,
            Alumni_ID: req.body.data.Alumni_ID
            
            
        }
        console.log("incoming data from update", item);

        let updatedata = await approvePost.findByIdAndUpdate(
            { "_id": id },
            { $set: item }
        );
        console.log(`from put method old data ${updatedata}`);
        res.send(updatedata);

    } catch (error) {
        console.log(`error from get method ${error}`);
    }

});


module.exports = router;