import express from "express";

export default class Server {
    constructor() {
        this.app = express()
        this.port = process.env.PORT || 3001;
        
    }
}