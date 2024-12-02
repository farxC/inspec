"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const router = (0, express_1.Router)();
exports.router = router;
router.get("/api", (req, res) => {
    res.status(200).send({
        success: 'true',
        message: 'Welcome to the application!',
        version: '1.0.0',
    });
});
//# sourceMappingURL=index.js.map