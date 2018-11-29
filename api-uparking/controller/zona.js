'use strict'
var con = require('../connection')

function getZona(req,res)
{
    let idZona= req.params.id;
    if(con){
        con.query(`SELECT * FROM zona WHERE idzona = '${idZona}'`, function (err, result) {
        if (err){
             res.status(500).send({message:'Error al devolver la zona'});
        } else{
            if(!result[0]){
                    res.status(404).send({message:'No existe la zona'});   
             }else{
                    res.status(200).send({result});               
             }
        }
            
     });}
}



function getZonas(req,res)
{
    if(con){
    con.query(`SELECT * FROM zona`, function (err, result) {
    if (err){
        res.status(500).send({message:'Error al devolver las zonas'});
    } else{
        if(!result[0]){
             res.status(404).send({message:'No existen zonas'});   
        }else{
            res.status(200).send({result});               
        }
    }
            
    });}

}

function saveZona(req,res)
{
    if(con){
    var params = req.body;

    con.query(`INSERT INTO zona ( idzona, nombre, dispoCarro, dispoMoto, idsede) VALUES ('${params.idzona}',
         '${params.nombre}','${params.dispoCarro}','${params.dispoMoto}','${params.idsede}')`, function (err, result) {
        if (err){
           res.status(500).send({message:'Error al guardar'});
           console.log(err);
        } 
        else{
            res.status(200).send({message:'1 Zona agregada'});           
        }
       
    });}
 }

 function updateZona(req,res)
{
    if(con){
    var idZona= req.params.id;
    var update = req.body;
    const sql ='UPDATE zona SET  nombre = '+ con.escape(update.nombre) +', dispoCarro = '+ con.escape(update.dispoCarro) +
                ', dispoMoto = '+ con.escape(update.dispoMoto) +', idsede = '+ con.escape(update.idsede) +
                ' WHERE idzona = '+idZona;
    con.query(sql, function (err, result) {
        if (err){
           res.status(500).send({message:'Error al guardar'});
           console.log(err);
        } 
        else{
            res.status(200).send({message:'1 Zona modificada'});           
        }
       
    });}
}

function deleteZona(req,res)
{   
    if(con){
    let idZona= req.params.id;
    
    con.query(`SELECT * FROM zona WHERE idzona = '${idZona}'`, function (err, result) {
        if (err){
             res.status(500).send({message:'Error al buscar la zona'});
        } else{
            if(!result[0]){
                    res.status(404).send({message:'No existe la zona'});   
             }else{
                con.query(`DELETE FROM zona WHERE idzona = '${idZona}'`, function (err, result) {
                if (err){
                    res.status(500).send({message:'Error al eliminar'});
                } 
                else{
                    res.status(200).send({message:'se elimino la zona'});               
                }
                    
                 });               
             }
        }
            
     });}
           
}


module.exports={
    getZona,
    getZonas, 
    saveZona,
    updateZona,
    deleteZona
}