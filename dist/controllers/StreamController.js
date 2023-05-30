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
exports.StreamController = void 0;
const client_1 = require("../client");
class StreamController {
    static getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const streams = yield client_1.prisma.stream.findMany({
                    include: {
                        groups: true
                    }
                });
                return res.send(streams);
            }
            catch (e) {
                res.status(500).json(e);
            }
        });
    }
    static getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const stream = yield client_1.prisma.stream.findMany({
                    where: {
                        id: +req.params.id
                    }
                });
                return res.send(stream);
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
                    const stream = yield client_1.prisma.stream.upsert({
                        where: {
                            id: req.body.id
                        },
                        update: Object.assign({}, req.body),
                        create: Object.assign(Object.assign({}, req.body), { id: undefined })
                    });
                    return res.send(stream);
                }
                const stream = yield client_1.prisma.stream.createMany({
                    data: Object.assign({}, req.body),
                    skipDuplicates: true
                });
                return res.send(stream);
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        });
    }
    static delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const deleted = yield client_1.prisma.stream.delete({
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
exports.StreamController = StreamController;
