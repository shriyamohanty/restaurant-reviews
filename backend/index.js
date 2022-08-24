//In this file we connect the databse and start the server

import app from "./server.js";
import mongodb from "mongodb";
import dotenv from "dotenv";

dotenv.config() //load the environment variables
const MongoClient = mongodb.MongoClient

const port = process.env.PORT || 8000  //accessing the port env , if cannot be processed we accesss 8000

MongoClient.connect(    //connecting to the database
    process.env.RESTREVIEWS_DB_URI,
    {
        maxPoolSize: 50,    //no. of people to connect
        socketTimeoutMS: 2500,   //timeout
        //useNewUrlParse: true
    }
)
.catch(err => {      //catching any errors
    console.error(err.stack)
    process.exit(1)
})
.then(async client =>{           //then () -> after that what to do ? 
    app.listen(port, () => {                          //listen function to look for incoming connections
        console.log('Listening on port ${port}')
    })
} )

