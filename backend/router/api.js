
const express = require("express");
const router = express.Router();


// for api calls
const admin = require("./admin.js");
router.use("/admin", admin);

const alumni = require("./alumni.js");
router.use("/alumni", alumni);

const employer = require("./employer.js");
router.use("/employer", employer);

const faculty = require("./faculty.js");
router.use("/faculty", faculty);



module.exports = router;