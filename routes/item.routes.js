import express from 'express';
import items from '../controllers/item'

const router = express.Router();

router.get('/listaritem',items.buscaritemsnofacturables);
router.post('/additems/:p1,:p2,:p3,:p4',items.additem);
router.post('/updatecitems/:p1,:p2',items.updatecantitem);
router.post('/deletitem/:p1',items.deletetitem)
module.exports = router ;