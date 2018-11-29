'use strict'
var con = require('../connection')

function getSede(req,res)
{
    let idSede= req.params.id;
    if(con){
        con.query(`SELECT * FROM sede WHERE idsede = '${idSede}'`, function (err, result) {
        if (err){
             res.status(500).send({message:'Error al devolver la sede'});
        } else{
            if(!result[0]){
                    res.status(404).send({message:'No existe la sede'});   
             }else{
                    res.status(200).send({result});               
             }
        }
            
     });}
}



function getSedes(req,res)
{
    if(con){
    con.query(`SELECT * FROM sede`, function (err, result) {
    if (err){
        res.status(500).send({message:'Error al devolver las Sedes'});
    } else{
        if(!result[0]){
             res.status(404).send({message:'No existen sedes'});   
        }else{
            res.status(200).send({result});               
        }
    }
            
    });}

}

function saveSede(req,res)
{
    if(con){
    var params = req.body;

    con.query(`INSERT INTO sede ( idsede, nombre) VALUES ('${params.idsede}',
         '${params.nombre}')`, function (err, result) {
        if (err){
           res.status(500).send({message:'Error al guardar'});
           console.log(params.nombre);
        } 
        else{
            res.status(200).send({message:'1 Sede agregada'});           
        }
       
    });}
 }

 function updateSede(req,res)
{
    if(con){
    var idSede= req.params.id;
    var update = req.body;
    const sql ='UPDATE sede SET  nombre = '+ con.escape(update.nombre) +
                'WHERE idsede = '+idSede;
    con.query(sql, function (err, result) {
        if (err){
           res.status(500).send({message:'Error al guardar'});
        } 
        else{
            res.status(200).send({message:'1 Sede modificada'});           
        }
       
    });}
}

function deleteSede(req,res)
{   
    if(con){
    let idSede= req.params.id;
    
    con.query(`SELECT * FROM sede WHERE idsede = '${idSede}'`, function (err, result) {
        if (err){
             res.status(500).send({message:'Error al buscar la sede'});
        } else{
            if(!result[0]){
                    res.status(404).send({message:'No existe la sede'});   
             }else{
                con.query(`DELETE FROM sede WHERE idsede = '${idSede}'`, function (err, result) {
                if (err){
                    res.status(500).send({message:'Error al eliminar'});
                } 
                else{
                    res.status(200).send({message:'se elimino la sede'});               
                }
                    
                 });               
             }
        }
            
     });}
           
}


module.exports={
    getSede,
    getSedes, 
    saveSede,
    updateSede,
    deleteSede
}