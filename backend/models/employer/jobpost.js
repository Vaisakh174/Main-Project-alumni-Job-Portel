const mongoose = require('mongoose')

const schema= mongoose.Schema;

const jobpost_detail = new schema({

    jobrole:{type:String, required:true},
    companyname:{type:String, required:true},
    education:{type:String, required:true},
    experience:{type:String, required:true},
    skills:{type:String, required:true},
    location:{type:String, required:true},
    salary:{type:String, required:true},
    jobdescription:{type:String, required:true},
    

})
const jobpostData = mongoose.model('employerjobpost',jobpost_detail)

module.exports = jobpostData