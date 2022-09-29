import 'reflect-metadata';
import express from 'express';
import { testEndPoints } from './controllers/test';

var path = require('path');
export const appRoot = path.resolve(__dirname);

const app = express();
app.use("/test", testEndPoints);

app.listen(3000, () => {
    console.log('Server is running on port 3000. Go to http://localhost:3000/')
});

//server.close();