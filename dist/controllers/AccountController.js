"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountController = void 0;
const client_1 = require("../client");
const bcrypt_1 = __importDefault(require("bcrypt"));
class AccountController {
    static register(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const account = yield client_1.prisma.account.create({
                    data: Object.assign(Object.assign({}, req.body), { password: yield bcrypt_1.default.hash(req.body.password, 7) }),
                });
                return res.send(account);
            }
            catch (e) {
                res.status(500).json(e);
            }
        });
    }
    static login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const account = yield client_1.prisma.account.findFirst({
                    where: {
                        login: req.body.login,
                    },
                });
                if (account) {
                    const isPass = account.password === (yield bcrypt_1.default.hash(req.body.password, 7));
                    if (isPass)
                        return true;
                    return false;
                }
                return false;
            }
            catch (e) {
                res.status(500).json(e);
            }
        });
    }
}
exports.AccountController = AccountController;
