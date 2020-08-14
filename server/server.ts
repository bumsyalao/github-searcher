/* eslint-disable */

import express, { Request, Response } from "express";
import cors from 'cors';
import { getRepositories, getUser } from './routes';

const app = express()
app.use(cors())

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("Hello World!");
})

app.get("/get-repository", getRepositories)
app.get("/get-user", getUser)

app.listen(8000, () => {
  console.log('Server Started at Port, 8000')
})