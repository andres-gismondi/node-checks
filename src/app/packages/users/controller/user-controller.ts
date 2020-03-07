import { Request, Response } from 'express';
import { User, IUser } from '../model/User';

class UserController {

    public getUser(req: Request<import('express-serve-static-core').ParamsDictionary>, res: Response): void {
        const user: User = new User();
        user.setName = 'Camila';
        user.setSurname = 'Felli';
        user.setUserName = 'camila_felli';
        user.setPassword = '123456';
        res.json({ user });
    }

}

const userController = new UserController();
export { userController }