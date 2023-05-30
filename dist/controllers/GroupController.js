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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupController = void 0;
const client_1 = require("../client");
class GroupController {
    static getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const groups = yield client_1.prisma.group.findMany();
                return res.send(groups);
            }
            catch (e) {
                res.status(500).json(e);
            }
        });
    }
    static getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const group = yield client_1.prisma.group.findMany({
                    where: {
                        id: +req.params.id
                    }
                });
                return res.send(group);
            }
            catch (e) {
                res.status(500).json(e);
            }
        });
    }
    static update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (req.body.id) {
                    const group = yield client_1.prisma.group.upsert({
                        where: {
                            id: req.body.id
                        },
                        update: Object.assign({}, req.body),
                        create: Object.assign(Object.assign({}, req.body), { id: undefined })
                    });
                    return res.send(group);
                }
                const group = yield client_1.prisma.group.createMany({
                    data: req.body
                });
                return res.send(group);
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        });
    }
    static delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const deleted = yield client_1.prisma.group.delete({
                    where: {
                        id: +req.params.id
                    }
                });
                return res.send(deleted);
            }
            catch (e) {
                res.status(500).json(e);
            }
        });
    }
}
exports.GroupController = GroupController;
