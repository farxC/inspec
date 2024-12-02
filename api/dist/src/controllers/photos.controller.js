"use strict";
/*
 * This file has the outcome store the photo in the Server Hard Disk and then
 * sent to the Database the O.S number and the photo path URL.
 * Author: Rafael Ortiz Nunes
 * Created in: 02/12/2024
 */
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
exports.storePhoto = void 0;
//TO DO..
const storePhoto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(req);
        res.status(201).send({
            message: "Photos sent",
            body: {
                container: { req }
            }
        });
    }
    catch (error) {
    }
});
exports.storePhoto = storePhoto;
//# sourceMappingURL=photos.controller.js.map