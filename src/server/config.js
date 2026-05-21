import express from "express";

export default class Server {
    constructor() {
        //invocamos a express y lo guardamos en app(prop)
        this.app = express()
        //config el puerto = chequea en la .env sino el 3001
        this.port = process.env.PORT || 3001;

        
    }
}