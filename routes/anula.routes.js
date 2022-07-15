import express from 'express';
import anulados from '../controllers/anu';

const router = express.Router();

//router.post(post);

router.get('/anufactura/:f1,:f2',anulados.anufactura);

module.exports = router ;