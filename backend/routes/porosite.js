const express = require('express')
const router = express.Router();
const mongoose = require('mongoose')
const porosiModel = require('../models/porosi')

//get all orders
router.get('/' , async (req,res) =>{
   try{
    const porosite = await porosiModel.find()
    res.json(porosite)
   

   }catch(err){
    res.status(500).json({message: err.message})
   }
})
router.get('/update' , async (req, res) => {
    var id = new mongoose.Types.ObjectId(req.query.id)

    var prs = await porosiModel.findById(id).exec().then(
        (porosi) =>{
            if(!porosi){
                res.json({message:"could not find the order..."})
            }
            res.render('update.ejs', {porosi})
        }
    )   
})

router.get('/add' , (req, res) => {
    res.render('shtoPorosi.ejs')
})
//get one specific order
router.get('/:id' , async (req,res) =>{
   var id = new mongoose.Types.ObjectId(req.params.id)
   let prs
   try{
    prs = await porosiModel.findById(id).exec()
    if(prs == null){
        res.json({message: "Could not find the order..."})
    }
   }catch(err){
    res.status(500).json({message: err.message})
   }
   res.json(prs)
})
//detele one order
router.delete('/:id' , async (req,res) =>{
    var id = new mongoose.Types.ObjectId(req.params.id)
    try{
        var prs  = await porosiModel.findByIdAndDelete(id)
        if(!prs){
            res.json({message: "Order not found..."})
        }
        res.status(200).json({message: 'Order deleted succesfully'})

    }catch(err){
        res.status(500).json({message: err.message})
    }
})

router.post('/add', async (req, res) => {
    const { fullName, product } = req.body;
  
    const prs = new porosiModel({
      fullName,
      product,
    });  
    try {
      const newPorosi = await prs.save();
      console.log('ok from server');
      res.status(201).json(newPorosi);  // Sending the newly created order as a response
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
router.post('/update' , async (req, res) => {
    try {    
        const id = req.body.id; 
        const updatedData = {
          fullName: req.body.fullName,
          product: req.body.product,
        };
        const porosi = await porosiModel.findByIdAndUpdate(id, updatedData, { new: true }); 
        
        if (!porosi) {
          return res.status(404).json({ message: "Order not found..." });
        }   
        res.redirect('/porosite');
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
})

//update one order
router.patch('/:id' , async (req,res) =>{
    var id = new mongoose.Types.ObjectId(req.params.id)
    const { fullName } = req.body
    try{
        var porosi = await porosiModel.findById(id).exec()
        if(!porosi){
            res.status(404).json({message: "Order not found..."})
        }
        porosi.fullName = fullName
        var updatedPorosi = await porosi.save()
        res.json(updatedPorosi)
    }
    catch(err){
        res.status(500).json({message: err.message})
    }
})


module.exports = router;




