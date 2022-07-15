import express from 'express';
import authentication from '../controllers/auth';


const router = express.Router();

//router.post(post);

router.post("/signup",authentication.signUp);
router.post("/signin",authentication.signIn);

module.exports = router ;
//module.export = router;