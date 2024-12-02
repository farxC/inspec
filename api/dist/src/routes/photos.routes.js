"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.photosRoutes = void 0;
const express_promise_router_1 = __importDefault(require("express-promise-router"));
const photos_controller_1 = require("../controllers/photos.controller");
/**
 * This file has the responsibility of photos route API related to the class "Photos"
   Author: Rafael Ortiz Nunes
   Created in: 02/12/2024
*/
const router = (0, express_promise_router_1.default)();
// Responsible route for sent the "Photos": (POST method): localhost:3000/api/photos
router.post('/photos', photos_controller_1.storePhoto);
exports.photosRoutes = router;
//# sourceMappingURL=photos.routes.js.map