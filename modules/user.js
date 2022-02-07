const express=require('express')
const { append } = require('express/lib/response')
const db=require('./db')
//get the express router
//router:used for routing

//import crypto-js for encrypting password
const crypto=require('crypto-js')
const cryptoJs = require('crypto-js')

const router=express.Router()


router.post('/signup',(request,response)=>{
    //get the body parameters
    //console.log(request.body)
    // const firstName=request.body.firstName
    // const lastName=request.body.lastName
    // const email=request.body.email
    // const password=request.body.password

    //extracting the keys from request body
    //all the matching keys are extracted as variable
    //all the matching keys are extracted as variables

    const{firstName,lastName,email,password}=request.body
    const encryptpassword= '' +cryptoJs.MD5(password)
    const query= `insert into User(firstName,lastName,email,password) values(?,?,?,?)`
    
    
    const params=[firstName,lastName,email,encryptpassword]
    db.execute(query,params,(error,result)=>{


        if(error){
          console.log(error)  
        }else{

            console.log(result)
        }
        response.send('done')
    })
    console.log('user is signing up')
  
})

router.post('/signin',(request,response)=>{
    console.log('user is signing in')
    const{email,password}=request.body
    const encryptpassword= '' +cryptoJs.MD5(password)
    const query=`select * from user where email=? and password=?`
    const params=[email,encryptpassword]

    db.execute(query,params,(error,users)=>{
        if (error){
            console.log(error)
            response.send('error')
        }
        else{
            console.log(users)
            if(users.length==0){
                response.send('user does not exist')
            }else
            {
                response.send(users[0])
            }
            
        }
    })

    

})

router.get('/profile',(request,response)=>{
    console.log('Returning profile')
    response.send()
})

router.put('/profile',(request,response)=>{
    console.log('Updating Profile')
    response.send()
})



//export router and use in server.js
module.exports=router