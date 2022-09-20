//1->
const express = require('express') //imported express
//we will not modify anything
//imports generraly are const

//call the instance of an express and save it to a variable
//2->
const app = express() 

//data from file
const data = require('./data/contacts')

//hard coded data
                        // const data = [
                        //     {
                        //         fname: 'peter',
                        //         phone: 29889181,
                        //         address: 'IND'
                        //     },
                        //     {
                        //         fname: 'peter',
                        //         phone: 29889181,
                        //         address: 'IND'
                        //     }

                        // ]

//give an implementation of http request
//in get (endpoint, callback func receieves 2 objects, 1st request object and 2nd is response request)
//4->
app.get('/home', (req, res)=>{
    //5->
    // res.send("modified data") //to modify the day, we will, we can also send basic html inpur, json data 
    res.send(JSON.stringify(data));
}) 

app.get('/user', (req, res)=>{
    res.send('user Data')
})
//First argument -----> name is nothing but an endpoint similar to /empdetails
//second argument -----> this call back func will handle req and response
//req and callback will be coming automatically to this callnback

//for sending data we'll use .send

                    // app.get('/contact', (req, res)=>{
                    //     res.send('duplicate')
                    // })

//duplicate routes

//listen will start the server, itb will make the server listen
//First argumnet - port number
//3->
app.listen(3001, ()=>console.log('server has started at port number 3001'))

//refreshing everytime is difficult so we will use
// Nodemon npm install -g nodemon

//run a server -> nodemon fileName

//to check if roots are werking fine, we will use postman
//then we can connect 