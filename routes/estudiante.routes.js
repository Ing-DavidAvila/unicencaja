import express from 'express';
import estudiantes from '../controllers/estu';

const router = express.Router();

//router.post(post);

router.get('/buscaid/:p1',estudiantes.buscaid);
router.get('/buscaci/:p1',estudiantes.buscaci);
router.get('/buscacarrera/:p1',estudiantes.buscacarrera);
router.get('/buscagestionactual',estudiantes.buscagestionactual);
router.get('/listardeuda/:p1,:p2',estudiantes.buscadeudaestudiante);
router.post('/cobrar/:p1,:p2,:p3,:p4,:p5,:p6',estudiantes.addcobroitems);
router.get('/buscatran/:p1',estudiantes.buscatraestudiante);
router.post('/cobrardetalle/:p1,:p2,:p3,:p4',estudiantes.addcobrodetalleitems);
router.get('/listarpagos/:p1',estudiantes.pagosestudiante);
module.exports = router ;