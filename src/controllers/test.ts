import express, { NextFunction, Request, Response } from 'express';
import Container, { Service } from 'typedi';
import { testService } from '../services/test.service';

@Service()
export class TestController {
    async getTask(req: Request, res: Response, next: NextFunction) {
        res.setHeader("Content-Type", "application/json");
        res.send(JSON.stringify(await testService.getTask()));
    }
}