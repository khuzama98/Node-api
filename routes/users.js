
const express = require("express");
const router = express.Router();

router.get('/getAll/:id',(req,res)=>{
    console.log('Data ==>',req.params.id)
    res.send({ user: [req.params.id],message:"success"})
})

router.post('/postAll', (req, res) => {
    console.log('data ==>', req.body)    
    res.send({ user: [], message: "success" })
})

router.delete('/delAll', (req, res) => {
    console.log('data ==>', req.body)    
    res.send({ user: [], message: "success" })
})

router.put('/putAll', (req, res) => {
    console.log('data ==>',req.body)
    res.send({ user: [], message: "success" })
})


module.exports = router;