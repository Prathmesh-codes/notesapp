//Import express
const express=require('express')



//create express app
const app=express()

//allow user to send data
app.use(express.json())


//create the router
const routeruser=require('./modules/user')
const routernote=require('./modules/note')

//add the routes
app.use('/user',routeruser)
app.use(routernote)





//start app
app.listen(4000,'0.0.0.0',()=>{
    console.log('server started')
})
