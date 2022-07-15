import pool from '../database/Keys'

const resportes ={};

resportes.cuadrodiario = async(req,res) =>{
 //const {fecha_del,fecha_al} = req.body;
 const fecha_del = req.params.f1;
 const fecha_al  = req.params.f2;
 
  try {
        const resultado = await(await pool.query("SELECT ROW_NUMBER() OVER(ORDER BY fac.numero_factura) AS numero,to_char(fac.fecha_hora,'DD/MM/YYYY') fecha,fac.numero_factura,de.nombref,de.nitf,de.paterno,de.materno,de.nombres ,iseg.descripcion,fac.monto_cubierto FROM unicen.factura fac, unicen.item_seguimiento iseg,unicen.estudiante e ,unicen.datos_estudiante de where fac.fecha_hora between $1 and $2 and fac.id_item_seguimiento  = iseg.id_item_seguimiento and fac.id_estudiante = e.id_estudiante and e.id_datos_estudiante = de.id_datos_estudiante order by fac.numero_factura",[fecha_del,fecha_al])).rows;
        if (resultado.length>0){
            res.status(200).json({resultado
              ///  numero : resultado[0].numero,
               // fecha : resultado[0].fecha_hora,
               // numero_factura : resultado[0].numero_factura,
               // nombref: resultado[0].nombref,
               // nitf: resultado[0].nitf,
               // paterno: resultado[0].paterno,
               // materno: resultado[0].materno,
               // nombres: resultado[0].nombres,
               // descripcion : resultado[0].descripcion,
               // monto_cubierto: resultado[0].monto_cubierto
            });
        }
        else {
            res.status(200).json({
                message:"NO EXISTEN DATOS EN LOS RANGOS INDICADOS:(",
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
resportes.segurofechas = async(req,res) =>{
    //const {fecha_del,fecha_al} = req.body;
    const fecha_del = req.params.f1;
    const fecha_al  = req.params.f2;
    
     try {
        const resultado = await(await pool.query("select * from unicen.sheiko_repsegurofechas($1,$2)",[fecha_del,fecha_al])).rows;
           if (resultado.length>0){
               res.status(200).json({resultado
                
               });
           }
           else {
               res.status(200).json({
                   message:"NO EXISTEN DATOS EN LOS RANGOS INDICADOS:(",
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
resportes.facsucur = async(req,res) =>{
    //const {fecha_del,fecha_al} = req.body;
    const fecha_del = req.params.f1;
    const fecha_al  = req.params.f2;
    
     try {
           const resultado = await(await pool.query("SELECT  ROW_NUMBER() OVER(ORDER BY fac.fecha_hora) AS numero,to_char(fac.fecha_hora,'DD/MM/YYYY') fecha,dp.paterno,dp.materno,dp.nombres,pc.nombrecaja,sl.nombresucursal,sum(fac.monto_cubierto ) total FROM unicen.factura fac,unicen.cuenta_personal cp ,unicen.datos_personal dp,unicen.fnpuntocaja pc,unicen.fnsucursal sl where fac.fecha_hora between $1 and $2 and fac.id_personal  = cp.id_personal and cp.id_datos_personal= dp.id_datos_personal and cp.id_personal = pc.id_personal and pc.id_fnsucursal = sl.id_fnsucursal group by fac.fecha_hora,dp.paterno,dp.materno,dp.nombres,pc.nombrecaja,sl.nombresucursal order by fecha,sl.nombresucursal,pc.nombrecaja",[fecha_del,fecha_al])).rows;
           if (resultado.length>0){
               res.status(200).json({resultado
                 ///  numero : resultado[0].numero,
                  // fecha : resultado[0].fecha_hora,
                  // numero_factura : resultado[0].numero_factura,
                  // nombref: resultado[0].nombref,
                  // nitf: resultado[0].nitf,
                  // paterno: resultado[0].paterno,
                  // materno: resultado[0].materno,
                  // nombres: resultado[0].nombres,
                  // descripcion : resultado[0].descripcion,
                  // monto_cubierto: resultado[0].monto_cubierto
               });
           }
           else {
               res.status(200).json({
                   message:"NO EXISTEN DATOS EN LOS RANGOS INDICADOS:(",
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
   resportes.detfaccaja = async(req,res) =>{
    //const {fecha_del,fecha_al} = req.body;
    const fecha_del = req.params.f1;
    const fecha_al  = req.params.f2;
    
     try {
           const resultado = await(await pool.query("SELECT  ROW_NUMBER() OVER(ORDER BY fac.numero_factura) AS numero,to_char(fac.fecha_hora,'DD/MM/YYYY') fecha,fac.numero_factura,dp.paterno,dp.materno,dp.nombres,pc.nombrecaja,sl.nombresucursal,de.paterno espa,de.materno esma,de.nombres esnom,iseg.descripcion,fac.monto_cubierto FROM unicen.factura fac,unicen.cuenta_personal cp ,unicen.datos_personal dp,unicen.fnpuntocaja pc,unicen.fnsucursal sl,unicen.datos_estudiante de,unicen.estudiante e, unicen.item_seguimiento iseg where fac.fecha_hora between $1 and $2 and fac.id_personal  = cp.id_personal and cp.id_datos_personal= dp.id_datos_personal and cp.id_personal = pc.id_personal and pc.id_fnsucursal = sl.id_fnsucursal and fac.id_item_seguimiento  = iseg.id_item_seguimiento and fac.id_estudiante = e.id_estudiante and e.id_datos_estudiante = de.id_datos_estudiante order by fecha,fac.numero_factura,sl.nombresucursal,pc.nombrecaja",[fecha_del,fecha_al])).rows;
           if (resultado.length>0){
               res.status(200).json({resultado
                 ///  numero : resultado[0].numero,
                  // fecha : resultado[0].fecha_hora,
                  // numero_factura : resultado[0].numero_factura,
                  // nombref: resultado[0].nombref,
                  // nitf: resultado[0].nitf,
                  // paterno: resultado[0].paterno,
                  // materno: resultado[0].materno,
                  // nombres: resultado[0].nombres,
                  // descripcion : resultado[0].descripcion,
                  // monto_cubierto: resultado[0].monto_cubierto
               });
           }
           else {
               res.status(200).json({
                   message:"NO EXISTEN DATOS EN LOS RANGOS INDICADOS:(",
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
   resportes.libros = async(req,res) =>{
    //const {fecha_del,fecha_al} = req.body;
    const fecha_del = req.params.f1;
    const fecha_al  = req.params.f2;
    
     try {
           const resultado = await(await pool.query("SELECT ROW_NUMBER() OVER(ORDER BY fac.numero_factura) AS numero,fac.numero_factura,fac.codigo_control,to_char(fac.fecha_hora,'DD/MM/YYYY') fecha,de.nombref,de.nitf ,iseg.descripcion,fac.monto_cubierto FROM unicen.factura fac, unicen.item_seguimiento iseg,unicen.estudiante e ,unicen.datos_estudiante de where fac.fecha_hora between $1 and $2 and fac.id_item_seguimiento  = iseg.id_item_seguimiento and fac.id_estudiante = e.id_estudiante and e.id_datos_estudiante = de.id_datos_estudiante order by fac.numero_factura",[fecha_del,fecha_al])).rows;
           if (resultado.length>0){
               res.status(200).json({resultado
                 ///  numero : resultado[0].numero,
                  // fecha : resultado[0].fecha_hora,
                  // numero_factura : resultado[0].numero_factura,
                  // nombref: resultado[0].nombref,
                  // nitf: resultado[0].nitf,
                  // paterno: resultado[0].paterno,
                  // materno: resultado[0].materno,
                  // nombres: resultado[0].nombres,
                  // descripcion : resultado[0].descripcion,
                  // monto_cubierto: resultado[0].monto_cubierto
               });
           }
           else {
               res.status(200).json({
                   message:"NO EXISTEN DATOS EN LOS RANGOS INDICADOS:(",
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
module.exports = resportes;