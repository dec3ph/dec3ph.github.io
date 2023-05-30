"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = require("../controllers/UserController");
const router = (0, express_1.Router)()
    .get("/users", UserController_1.UserController.getAll)
    .put("/users", UserController_1.UserController.update)
    .delete("/users/:id", UserController_1.UserController.delete);
exports.default = router;
