"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var client_1 = __importDefault(require("react-dom/client"));
require("./index.css");
var App_1 = require("./App");
var root = client_1["default"].createRoot(document.getElementById('root'));
root.render(react_1["default"].createElement(App_1.App, null));
