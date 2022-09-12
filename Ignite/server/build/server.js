"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get("/ads", (req, res) => {
    res.json([
        { id: 1, name: "Test 1" },
        { id: 2, name: "Test 2" },
        { id: 3, name: "Test 3" },
        { id: 4, name: "Test 4" },
    ]);
});
app.listen(3333);
