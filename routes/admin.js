const express = require('express')

const router = express.Router()

const Admin = require('../models/admin')

router.get('/',async(req,res)=>{
   try{

    const admin = await Admin.find() 
    res.json(admin)


   }catch(err){
    res.send('ERROR'+ err)
   }
    
})

router.get('/:id',async(req,res)=>{
    try{

 
     const admin = await Admin.findById(req.params.id) 
     res.json(admin) 
 
 
    }catch(err){
     res.send('ERROR'+ err)
    }
     
 })

router.post('/', async(req,res)=>{
    const admin = new Admin({
        name:req.body.name,
        mail:req.body.mail,
        password:req.body.password
    })
    console.log(admin)

    try{
      const u1 = await  admin.save()
      res.json(u1)
       

    }catch(err){
        res.send('error'+err)
    }



})



module.exports = router