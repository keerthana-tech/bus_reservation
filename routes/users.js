const express = require('express')
const router = express.Router()

const User = require('../models/user')

router.get('/',async(req,res)=>{
   try{

    const user = await User.find() 
    res.json(user)


   }catch(err){
    res.send('ERROR'+ err)
   }
    
})

router.get('/:id',async(req,res)=>{
    try{

 
     const user = await User.findById(req.params.id) 
     res.json(user) 
 
 
    }catch(err){
     res.send('ERROR'+ err)
    }
     
 })

router.post('/', async(req,res)=>{
    const user = new User({
        name:req.body.name,
        mail:req.body.mail,
        password:req.body.password
    })
    

    try{
        const { mail } = req.body.mail
        const user = await User.findOne({mail})
        if(!user) {
            return res.status(401).json({
                message: "mail alreay exists",
                error: "mail exists",
            })
        }
      const u1 = await  user.save()
      res.json(u1)
       

    }catch(err){
        res.send('error'+err)
    }



})




module.exports = router