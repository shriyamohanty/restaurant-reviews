import express from "express";
import cors from "cors";
import restaurants from "./api/restaurants.route.js"; //what is route? json route?

const app = express()  //using this for server

app.use(cors())
app.use(express.json()) //server will be able to read json

app.use("/api/v1/restaurants", restaurants) //specifying the api url that people will go to, routes 
app.use("*",(req, res) => res.status(404).json({error: "Not Found"})) //if someone goes to a route that doesn't exist (* -> wildcard), 404: not found error

export default app  //export app as a module  to import this module to the file that accesses the database
