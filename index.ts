// import express,{Application, Request, Response} from 'express'
// require("./config/db")
// const port = 2045
// import userRouter from "./router/userRouter"


// const app: Application = express()

// app.set("view engine", "ejs")
// app.use(express.json())

// app.get("/", (req: Request, res: Response): Response => {
//     return res.status(200).json({"message": "This is it"})
// })

// app.get("/index", (req, res) => {
//     return res.render("index")
// })

// app.use("/api/user", userRouter)

// app.listen(port, (): void =>{
//     console.log(`Listening to port ${port}`)
// })


// const { Console } = require('console');
import {Console} from "console"
// const { Console } = require('console');
// const fs = require("fs");
import fs from "fs"
const output = fs.createWriteStream('./stdout.log');
const errorOutput = fs.createWriteStream('./stderr.log');
// Custom simple logger
// const logger = new Console({ stdout: output, stderr: errorOutput });
const logger = new Console(process.stdout,process.stderr);

const count = 5;
logger.log('count: %d', count);

logger.error(new Error('Whoops, something bad happened'));
// const out = getStreamSomehow();
// const err = getStreamSomehow();
// const myConsole = new console.Console(out, err);

logger.log("hello")