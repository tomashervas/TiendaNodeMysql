const express = require('express');
const router = express.Router();
const Cliente  = require('../models/Cliente')


router.get('/', (req, res) => {

    Cliente.findAll().then(c=>{
        res.status(200).json(c);
    }).catch(err=>{
        let errorList = err.errors.map(e=>{
            return e.message
        })
        res.status(500).json(errorList)});
    
});

router.post('/', (req, res) => {
    const { nombre, apellidos, direccion, email } = req.body;
    Cliente.create({
        nombre,
        apellidos,
        direccion,
        email
    }).then(c=>{
        res.status(201).json(c);
    }).catch(err=>{
        let errorList = err.errors.map(e=>{
            return e.message
        })
        res.status(500).json(errorList)});
    
});

router.put('/:id', (req, res)=>{
        const {id} = req.params;
        const {nombre, apellidos, direccion} = req.body;
         Cliente.update({
            nombre, apellidos, direccion
         },{
             where: {
                 id
             }
         }).then(c=>{
             if (c==0) res.status(400).json({msg: 'No existe ningun registro con ese id'})
             else res.status(200).json({msg: 'Actualizado el registro correctamente'})
             
         }).catch(err=>{
             let errorList = err.errors.map(e=>{
                 return e.message
             })
             res.status(500).json(errorList)});
})

router.delete('/:id', (req, res)=>{
   const {id} = req.params;

    Cliente.destroy({
        where: {
            id
        }
    }).then(c=>{
        if (c==0) res.status(400).json({msg: 'No existe ningun registro con ese id'})
        else res.status(200).json({msg: 'Eliminado el registro correctamente'})
        
    }).catch(err=>{
        let errorList = err.errors.map(e=>{
            return e.message
        })
        res.status(500).json(errorList)});
});




module.exports = router;