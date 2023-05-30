"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const StreamController_1 = require("../controllers/StreamController");
const router = (0, express_1.Router)()
    .get("/streams", StreamController_1.StreamController.getAll)
    .get("/streams/:id", StreamController_1.StreamController.getOne)
    .put("/streams", StreamController_1.StreamController.update)
    .delete("/streams/:id", StreamController_1.StreamController.delete);
exports.default = router;
