const mongoose = require("mongoose");
const schema = mongoose.Schema;

const approvedJob = new schema({

    Jobname: { type: String, requied: true },
    Qualifications: { type: String, requied: true },
    Experience: { type: String, requied: true },
    JobID: { type: String, requied: true },
    Alumni_name: { type: String, requied: true },
    Alumni_qualification: { type: String, requied: true },
    Alumni_ID: { type: String, requied: true },
    Alumni_Experience: { type: String, requied: true },
    Alumni_course: { type: String, requied: true },
    Alumni_branch: { type: String, requied: true },
    Alumni_Placement: { type: String, requied: true },
    Placed_company: { type: String, requied: true },
    Alumni_phone: { type: String, requied: true },
    Alumni_email: { type: String, requied: true },       
    Date: { type: String, requied: true }
});
let apDATA = mongoose.model("approvedJobReq", approvedJob);
module.exports = apDATA;