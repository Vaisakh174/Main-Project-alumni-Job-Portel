const express = require("express");
const router = express.Router();
const DATA= require('../models/employer/employerSchema');
//enter your code here 


router.post('/employersignup',async(req,res)=>{
    try {
        console.log(req.body)
        let item={
            name :req.body.name,
            email:req.body.email,
            phnno:req.body.phnno,
            password:req.body.password,
            companyname:req.body.companyname,
            designation:req.body.designation
        }
        const newEmployer=new DATA(item)
        const saveEmployer=await newEmployer.save()
        res.send(saveEmployer)
    } catch (error) {
        console.log(error)
    }
})















module.exports = router;