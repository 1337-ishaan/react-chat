import express from 'express';
import {database} from '../db';


const db = database;
const app = express();

const register = (req:Object,res:Object) => { 
    console.log(req, "requested")
}

