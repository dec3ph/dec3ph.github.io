"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const GroupController_1 = require("../controllers/GroupController");
const router = (0, express_1.Router)()
    .get('/groups', GroupController_1.GroupController.getAll)
    .get('/groups/:id', GroupController_1.GroupController.getOne)
    .put('/groups', GroupController_1.GroupController.update)
    .delete('/groups/:id', GroupController_1.GroupController.delete);
exports.default = router;
