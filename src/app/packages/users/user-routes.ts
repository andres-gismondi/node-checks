import express, { Request, Response } from 'express';
import { userController } from './controller/user-controller';

export const router = express.Router({
    strict: true
});

router.get('/', (req: Request, res: Response) => {
    userController.getUser(req, res);
})