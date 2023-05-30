"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AccountController_1 = require("../controllers/AccountController");
const router = (0, express_1.Router)()
    .get("/login", AccountController_1.AccountController.login)
    .put("/register", AccountController_1.AccountController.register);
exports.default = router;
