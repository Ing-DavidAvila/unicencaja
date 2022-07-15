import pool from '../database/Keys'
const items ={};
items.buscaritemsnofacturables = async(req,res) =>{
    try {
        const resultado = await(await pool.query("select * from unicen.sheiko_listaritemsnofacturables()")).rows;
        if (resultado.length>0){
            res.status(200).json({resultado});
        }
        else {
            res.status(200).json({
                message:"NO EXISTEN DATOS:(",
                NotFount:true,
            });
        }
    } catch (error) {
        res.status(500).json({
            message:'INESPERADO ERROR REPORTELO A ASI INMEDIATAMENTE, GRACIAS !!!',
            error
        })
    }
};
items.additem = async(req,res) =>{
    //const {fecha_del,fecha_al} = req.body;
    const idestudiante = req.params.p1;
    const iditem = req.params.p2;
    const monto  = req.params.p3;
    const idgestion = req.params.p4;
    //const fecha_al  = req.params.f2;
    
     try {
           await pool.query("select unicen.seiko_additemdeudanofacturable($1,$2,$3,$4)",[idestudiante,iditem,monto,idgestion]);
                             
               res.status(200).json({
                   message:'SE GUARDARON LOS CAMBIOS!!!'
             
               })
           
                      
       } catch (error) {
           res.status(500).json({
               message:'INESPERADO ERROR REPORTELO A ASI INMEDIATAMENTE, GRACIAS !!!',
               error
           })
       }
   
   };
   items.updatecantitem = async(req,res) =>{
    //const {fecha_del,fecha_al} = req.body;
    const iddeuda = req.params.p1;
    const cant  = req.params.p2;
    
    //const fecha_al  = req.params.f2;
    
     try {
           await pool.query("select unicen.seiko_edititemcantnofacturable($1,$2)",[iddeuda,cant]);
                             
               res.status(200).json({
                   message:'SE GUARDARON LOS CAMBIOS!!!'
             
               })
           
                      
       } catch (error) {
           res.status(500).json({
               message:'INESPERADO ERROR REPORTELO A ASI INMEDIATAMENTE, GRACIAS !!!',
               error
           })
       }
   
   };
   items.deletetitem = async(req,res) =>{
    //const {fecha_del,fecha_al} = req.body;
    const iddeuda = req.params.p1;
    
    
    //const fecha_al  = req.params.f2;
    
     try {
           await pool.query("select unicen.seiko_deleteitemnofacturable($1)",[iddeuda]);
                             
               res.status(200).json({
                   message:'SE GUARDARON LOS CAMBIOS!!!'
             
               })
           
                      
       } catch (error) {
           res.status(500).json({
               message:'INESPERADO ERROR REPORTELO A ASI INMEDIATAMENTE, GRACIAS !!!',
               error
           })
       }
   
   };
      
       
module.exports = items;



