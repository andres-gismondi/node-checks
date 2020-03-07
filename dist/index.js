"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const constants_1 = require("./app/config/constants");
const index_packages_1 = require("./app/packages/index-packages");
const app = express_1.default();
app.use(express_1.default.json());
app.use('/users', index_packages_1.userRouter);
app.listen(constants_1.PORT, () => {
    // tslint:disable-next-line:no-console
    console.log(`Server is listening on port ${constants_1.PORT}`);
});
//# sourceMappingURL=index.js.map