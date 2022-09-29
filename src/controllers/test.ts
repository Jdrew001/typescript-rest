import express from 'express';
import { mockService } from '../services/mock.service';
import { testService } from '../services/test.service';

export const testEndPoints = express.Router();

testEndPoints.get('/', async (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify(await testService.getTask()));
});

testEndPoints.get('/new', (req, res) => {
    res.send(testService.getNewTask());
});