import pool from '../database/Keys'

const anulado ={};

anulado.anufactura = async(req,res) =>{
 //const {fecha_del,fecha_al} = req.body;
 const fecha_del = req.params.f1;
 const fecha_al  = req.params.f2;
 
  try {
        const resultado = await(await pool.query("SELECT ROW_NUMBER() OVER(ORDER BY fac.numero_factura) AS numero,to_char(fac.fecha_hora,'DD/MM/YYYY') fecha,fac.numero_factura,de.nombref ,de.nitf,de.paterno,de.materno,de.nombres,rpo.transaccion_id,rpo.appkey ,COUNT(iseg.descripcion )items,SUM(fac.monto_cubierto ) total FROM unicen.factura fac, unicen.item_seguimiento iseg,unicen.estudiante e ,unicen.datos_estudiante de, unicen.registro_pagos_online rpo WHERE fac.fecha_hora between $1 and $2       and fac.id_item_seguimiento  = iseg.id_item_seguimiento and fac.id_estudiante = e.id_estudiante and e.id_datos_estudiante = de.id_datos_estudiante and fac.numero_factura  = rpo.numero_factura and fac.fecha = rpo.fecha and fac.id_estudiante = rpo.id_estudiante::integer GROUP BY fac.fecha_hora,fac.numero_factura,de.nombref ,de.nitf,de.paterno,de.materno,de.nombres,rpo.transaccion_id,rpo.appkey ORDER BY fac.numero_factura",[fecha_del,fecha_al])).rows;
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
module.exports = anulado;