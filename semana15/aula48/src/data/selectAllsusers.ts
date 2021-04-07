import express, { Router } from 'express'
import cors from 'cors'
import connection from "../connection"

const router: Router = express()

router.use(express.json());
router.use(cors())


export default async function selectAllUsers():Promise<any> {
    const result = await connection.raw(`
       SELECT *
       FROM aula48_exercicio;
    `)
 
    return result[0]
 }