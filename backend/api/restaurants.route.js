import express from "express"

const router = express.Router() //express router 

//first route : / -> root url, responds with hello world
router.route("/").get((req, res) => res.send("hello world"))

export default router