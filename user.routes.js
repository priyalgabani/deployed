const {Router} = require("express");
const { login, home, signup, signdata, logindata } = require("../controllers/user.controllers");
const passport = require("passport");
const router = Router();

router.get("/", home)
router.get("/login" , login)
router.get("/signup" ,signup)

router.post("/signup",signdata );
router.post("/login",passport.authenticate("local",{
    failureRedirect:"/signup",
    successRedirect:"/",
})
,logindata);

module.exports = router