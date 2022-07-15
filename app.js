import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import fileUpload from 'express-fileupload';
import history from 'connect-history-api-fallback';
import path from 'path';

const app = express(); 


//MIDELWARES 
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(fileUpload({useTempFiles:true}));

//ROUTES
app.use('/', require('./routes/auth.routes')); 
app.use('/reporte', require('./routes/report.routes')); 
app.use('/anulado', require('./routes/anula.routes')); 
app.use('/estudiante',require('./routes/estudiante.routes'));
app.use('/item',require('./routes/item.routes'))

//MIDELWARES FOR VUE
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));
// SETTINGS
app.set('port', process.env.PORT || 3000);

app.listen(app.get('port') , ()=>{
    console.log('EL PUERTO DEL SERVIDOR ES ' + app.get('port'));
})