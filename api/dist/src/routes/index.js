"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const router = (0, express_1.Router)();
exports.router = router;
router.get("/api", (req, res) => {
    res.status(200).send({
        success: 'true',
        message: 'Seja bem-vindo(a) a API Node.js + PostgreSQL + Azure!',
        version: '1.0.0',
    });
});
//# sourceMappingURL=index.js.map