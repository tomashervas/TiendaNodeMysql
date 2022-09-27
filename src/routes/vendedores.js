const express = require('express');
const router = express.Router();
const Vendedor  = require('../models/Vendedor')


router.get('/', (req, res) => {

    Vendedor.findAll().then(c=>{
        res.status(200).json(c);
    }).catch(err=>{
        let errorList = err.errors.map(e=>{
            return e.message
        })
        res.status(500).json(errorList)});
    
});

router.post('/', (req, res) => {
    const { nombre, apellidos, email } = req.body;
    Vendedor.create({
        nombre,
        apellidos,
        email
    }).then(c=>{
        res.status(201).json(c);
    }).catch(err=>{
        let errorList = err.errors.map(e=>{
            return e.message
        })
        res.status(500).json(errorList)});
    
});

router.patch('/:id', (req, res)=>{
        const {id} = req.params;
        const {nombre, apellidos} = req.body;
         Vendedor.update({
            nombre, apellidos
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

    Vendedor.destroy({
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