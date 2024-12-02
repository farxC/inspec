"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
const photos_routes_1 = require("./routes/photos.routes");
const app = (0, express_1.default)();
exports.app = app;
// ==> API ROUTES:
const index = routes_1.router;
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use(express_1.default.json({ type: 'application/vnd.api+json' }));
app.use((0, cors_1.default)());
app.get('/', (req, res) => {
    res.send('Hello World!!!');
});
// ==> API Routes:
app.use(index);
app.use('/api/', photos_routes_1.photosRoutes);
//# sourceMappingURL=app.js.map