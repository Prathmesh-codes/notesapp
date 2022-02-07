const express=require('express')
//get the express router
//router:used for routing

const router=express.Router()



router.get('/note/all',(request,response)=>{
    console.log('Returning all notes')
    response.send()
})

router.get('/note/my',(request,response)=>{
    console.log('Returning my notes')
    response.send()
})

router.put('/note/:id',(request,response)=>{
    console.log('Updating a note')
    response.send()
})

router.delete('/note/:id',(request,response)=>{
    console.log('deleting a note')
    response.send()
})

router.post('/note/create',(request,response)=>{
    console.log('Created a new note')
    response.send()
})


module.exports=router