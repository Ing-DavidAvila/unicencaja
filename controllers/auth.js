import pool from '../database/Keys'

const authentication ={};

authentication.signUp = (req,res)=>{
    console.log(req.body);
    res.send('REGISTRADO AMIGO');
    };


authentication.signIn = async(req,res) =>{
 const {user,password} = req.body;
  try {
        const usuario = await(await pool.query('SELECT de.login,de.paterno, de.materno, de.nombres, de.id_datos_personal,cp.id_personal,fnp.nombrecaja,fnsuc.nombresucursal,fnsuc.direccion,fnsuc.telefono,sd.departamento,de.id_sede,de.id_rol FROM unicen.datos_personal de ,unicen.cuenta_personal cp,unicen.fnpuntocaja fnp,unicen.fnsucursal fnsuc,unicen.sede sd  WHERE de.login = ($1) AND de.pass like md5($2) and de.id_datos_personal  = cp.id_datos_personal and cp.id_personal = fnp.id_personal and fnp.id_fnsucursal = fnsuc.id_fnsucursal and fnsuc.id_sede = sd.id_sede',[user,password])).rows;
        if (usuario.length>0){
            res.status(200).json({
             usuario:usuario[0].login,
             id_sede:usuario[0].id_sede,
             id_rol:usuario[0].id_rol,
             personal:usuario[0].id_personal,
             nombres:usuario[0].nombres
            });
        }
        else {
            res.status(200).json({
                message:"EL USUARIO NO EXISTE :(",
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
module.exports = authentication;