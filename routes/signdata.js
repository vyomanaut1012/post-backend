const express=require("express");
const router=express.Router();


const {signup}=require("../controllers/signup");
const {userapi}=require("../controllers/userapi");
const {login}=require("../controllers/login");
const {getotp}=require("../controllers/getotp");
const {updatepassword}=require("../controllers/updatepassword");
const {auth}=require("../Middleware/Auth");
const {updateURL}=require("../controllers/updateProfileUrl");
const {userdata}=require("../controllers/userData");
const {postData}=require("../controllers/postData");
const {postapi}=require("../controllers/postapi");
const {showpost} = require("../controllers/showpost");
const {showapi} = require("../controllers/showapi");

router.post("/signup",signup);
router.get("/userapi",userapi);
router.post("/login", login);
router.post("/getotp",getotp);
router.post("/updatepassword",updatepassword);
router.post("/auth",auth);
router.post("/updateURL",updateURL);
router.post("/userdata", userdata);
router.post("/postdata",postData);
router.get("/postapi",postapi);
router.post("/showpost", showpost);
router.get("/showapi", showapi);

module.exports=router;