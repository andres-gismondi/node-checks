"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("./controller/user-controller");
exports.router = express_1.default.Router({
    strict: true
});
exports.router.get('/', (req, res) => {
    user_controller_1.userController.getUser(req, res);
});
//# sourceMappingURL=user-routes.js.map