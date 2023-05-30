"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const StreamRouter_1 = __importDefault(require("./router/StreamRouter"));
const GroupRouter_1 = __importDefault(require("./router/GroupRouter"));
const UserRouter_1 = __importDefault(require("./router/UserRouter"));
const AccountRouter_1 = __importDefault(require("./router/AccountRouter"));
const port = process.env.API_PORT;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({
    extended: true,
}));
app.use("/api", StreamRouter_1.default);
app.use("/api", GroupRouter_1.default);
app.use("/api", UserRouter_1.default);
app.use("/api", AccountRouter_1.default);
app.listen(port, () => {
    console.log(`now listening on port ${port}`);
});
