import pool from '../database/Keys'
const estudiantes ={};
estudiantes.buscaid = async(req,res) =>{
    //const {fecha_del,fecha_al} = req.body;
    const idestudiante = req.params.p1;
    //const fecha_al  = req.params.f2;
    
     try {
           const resultado = await(await pool.query("select * from unicen.sheiko_buscarestudianteid($1)",[idestudiante])).rows;
           if (resultado.length>0){
               res.status(200).json({resultado
             
               });
           }
           else {
               res.status(200).json({
                   message:"NO EXISTEN DATOS:(",
                   NotFount : true,
               });
           }
           
       } catch (error) {
           res.status(500).json({
               message:'INESPERADO ERROR REPORTELO A ASI INMEDIATAMENTE, GRACIAS !!!',
               error
           })
       }
   
   };
   estudiantes.buscaci = async(req,res) =>{
    //const {fecha_del,fecha_al} = req.body;
    const ciestudiante = req.params.p1;
    //const fecha_al  = req.params.f2;
    
     try {
           const resultado = await(await pool.query("select * from unicen.sheiko_buscarestudianteci($1)",[ciestudiante])).rows;
           if (resultado.length>0){
               res.status(200).json({resultado
             
               });
           }
           else {
               res.status(200).json({
                   message:"NO EXISTEN DATOS:(",
                   NotFount : true,
               });
           }
           
       } catch (error) {
           res.status(500).json({
               message:'INESPERADO ERROR REPORTELO A ASI INMEDIATAMENTE, GRACIAS !!!',
               error
           })
       }
   
   };
   estudiantes.buscacarrera = async(req,res) =>{
    //const {fecha_del,fecha_al} = req.body;
    const idestudiante = req.params.p1;
    //const fecha_al  = req.params.f2;
    
     try {
           const resultado = await(await pool.query("select * from unicen.sheiko_buscarcarrera($1)",[idestudiante])).rows;
           if (resultado.length>0){
               res.status(200).json({resultado
             
               });
           }
           else {
               res.status(200).json({
                   message:"NO EXISTEN DATOS :(",
                   NotFount : true,
               });
           }
           
       } catch (error) {
           res.status(500).json({
               message:'INESPERADO ERROR REPORTELO A ASI INMEDIATAMENTE, GRACIAS !!!',
               error
           })
       }
   
   };
   estudiantes.buscagestionactual = async(req,res) =>{
    //const {fecha_del,fecha_al} = req.body;
    const idestudiante = req.params.p1;
    //const fecha_al  = req.params.f2;
    
     try {
           const resultado = await(await pool.query("select * from unicen.sheiko_buscargestionactual()")).rows;
           if (resultado.length>0){
               res.status(200).json({resultado
             
               });
           }
           else {
               res.status(200).json({
                   message:"NO EXISTEN DATOS :(",
                   NotFount : true,
               });
           }
           
       } catch (error) {
           res.status(500).json({
               message:'INESPERADO ERROR REPORTELO A ASI INMEDIATAMENTE, GRACIAS !!!',
               error
           })
       }
   
   };
   estudiantes.buscadeudaestudiante = async(req,res) =>{
    //const {fecha_del,fecha_al} = req.body;
    const idestudiante = req.params.p1;
    const idgestion  = req.params.p2;
    
     try {
           const resultado = await(await pool.query("select * from unicen.sheiko_listardeudaestudiantenf($1,$2)",[idestudiante,idgestion])).rows;
           if (resultado.length>0){
               res.status(200).json({resultado
             
               });
           }
           else {
               res.status(200).json({
                   message:"NO EXISTEN DATOS :(",
                   NotFount : true,
               });
           }
           
       } catch (error) {
           res.status(500).json({
               message:'INESPERADO ERROR REPORTELO A ASI INMEDIATAMENTE, GRACIAS !!!',
               error
           })
       }
   
   };
   estudiantes.buscatraestudiante = async(req,res) =>{
    //const {fecha_del,fecha_al} = req.body;
    const idestudiante = req.params.p1;
    
     try {
           const resultado = await(await pool.query("select * from unicen.sheiko_idtraestudiante($1)",[idestudiante])).rows;
           if (resultado.length>0){
               res.status(200).json({resultado
             
               });
           }
           else {
               res.status(200).json({
                   message:"NO EXISTEN DATOS :(",
                   NotFount : true,
               });
           }
           
       } catch (error) {
           res.status(500).json({
               message:'INESPERADO ERROR REPORTELO A ASI INMEDIATAMENTE, GRACIAS !!!',
               error
           })
       }
   
   };
   estudiantes.addcobroitems = async(req,res) =>{
    //const {fecha_del,fecha_al} = req.body;
    const idpersonal = req.params.p1;
    const idestudiante = req.params.p2;
    const iditem = req.params.p3;
    const idgestion = req.params.p4;
    const totaldu  = req.params.p5;
    const recibo  = req.params.p6;
    
    
    //const fecha_al  = req.params.f2;
    
     try {
           await pool.query("select unicen.seiko_addcobroestnofacturable($1,$2,$3,$4,$5,$6)",[idpersonal,idestudiante,iditem,idgestion,totaldu,recibo]);
                             
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
   estudiantes.addcobrodetalleitems = async(req,res) =>{
    //const {fecha_del,fecha_al} = req.body;
    const idestudiante = req.params.p1;
    const iditem = req.params.p2;
    const idtrans = req.params.p3;
    const totaldu  = req.params.p4;
    
    //const fecha_al  = req.params.f2;
    
     try {
           await pool.query("select unicen.seiko_addcobrodetalleestnofacturable($1,$2,$3,$4)",[idestudiante,iditem,idtrans,totaldu]);
                             
               res.status(200).json({
                   message:'SE GUARDARON LOS CAMBIOS :)'
             
               })
           
                      
       } catch (error) {
           res.status(500).json({
               message:'INESPERADO ERROR REPORTELO A ASI INMEDIATAMENTE, GRACIAS !!!',
               error
           })
       }
   
   };
   estudiantes.pagosestudiante = async(req,res) =>{
    //const {fecha_del,fecha_al} = req.body;
    const idestudiante = req.params.p1;
    //const fecha_al  = req.params.f2;
    
     try {
        const resultado = await(await pool.query("select * from unicen.sheiko_listarpagosestudiantenf($1)",[idestudiante])).rows;
           if (resultado.length>0){
               res.status(200).json({resultado
             
               });
           }
           else {
               res.status(200).json({
                   message:"NO EXISTEN DATOS :(",
                   NotFount : true,
               });
           }
           
       } catch (error) {
           res.status(500).json({
               message:'INESPERADO ERROR REPORTELO A ASI INMEDIATAMENTE, GRACIAS !!!',
               error
           })
       }
   
   };
module.exports = estudiantes;