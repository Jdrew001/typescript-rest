import express from 'express';
import Container from 'typedi';
import { TestController } from './controllers/test';

export const testEndPoints = express.Router();
const testController = Container.get(TestController);

testEndPoints.get('/', testController.getTask);

// testEndPoints.get('/new', (req, res) => {
//     res.send(testService.getNewTask());
// });