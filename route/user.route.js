const route = require("express").Router();
const {userSignUp, userLogin, userLogout}= require("../controller/user.controller");
const {validateRequest, schemas} = require("../validation/user.validation")

route.post("/signup",validateRequest(schemas.signupSchema), userSignUp)
route.post("/login",validateRequest(schemas.loginSchema), userLogin)
route.get("/logout", userLogout)


module.exports = route