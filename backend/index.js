//     const express=require('express');
//     const cors=require('cors');
//     require('dotenv').config()
//     const cookieParser=require('cookie-parser')
//     const connectDB=require('./config/dbConnection.js')
//     const router=require('./routes/index.js')


//     const app=express()
//     app.use(cors({
//         origin: 'http://localhost:5174', // Allow requests from this origin
//         credentials: true // Allow cookies and authentication headers
//       }));
//     app.use(express.json())
//     app.use(cookieParser())
    
//     app.use("/api",router)

//     const PORT=9001 || process.env.PORT

//     connectDB().then(()=>{
//     app.listen(PORT,()=>{
//         console.log("connected to db")
//         console.log(`server is listening to port ${PORT}`)
//     })
// })


    const express=require('express');
    const cors=require('cors');
    require('dotenv').config()
    const cookieParser=require('cookie-parser')
    const connectDB=require('./config/dbConnection.js')
    const router=require('./routes/index.js')
    const path=require('path');


    const app=express()
    app.use(cors({
        origin: 'http://localhost:5174', // Allow requests from this origin
        credentials: true // Allow cookies and authentication headers
      }));
    app.use(express.json())
    app.use(cookieParser())
    const _dirname=path.dirname('')
    const buildpath=path.join(_dirname,"../client/build")
    app.use(express.static(buildpath));
    app.use(cors({
        origin: '*', // Allow requests from this origin
        credentials: true // Allow cookies and authentication headers
      }));

      app.get('/',(req,res)=>{
        res.send("server is working")
        })


    app.use("/api",router)

    const PORT=9001 || process.env.PORT

    connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log("connected to db")
        console.log(`server is listening to port ${PORT}`)
    })
})