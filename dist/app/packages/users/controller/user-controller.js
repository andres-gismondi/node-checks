"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("../model/User");
class UserController {
    getUser(req, res) {
        const user = new User_1.User();
        user.setName = 'Camila';
        user.setSurname = 'Felli';
        user.setUserName = 'camila_felli';
        user.setPassword = '123456';
        res.json({ user });
    }
}
const userController = new UserController();
exports.userController = userController;
//# sourceMappingURL=user-controller.js.map