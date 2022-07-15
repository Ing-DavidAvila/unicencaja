import express from 'express';
import resportes from '../controllers/repo';

const router = express.Router();

//router.post(post);

router.get('/cuadrodiario/:f1,:f2',resportes.cuadrodiario);
router.get('/segurofec/:f1,:f2',resportes.segurofechas);
router.get('/facsucur/:f1,:f2',resportes.facsucur);
router.get('/detfaccaja/:f1,:f2',resportes.detfaccaja);
router.get('/libros/:f1,:f2',resportes.libros);
module.exports = router ;