"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.CreateAMoneylineForm = void 0;
var react_1 = __importDefault(require("react"));
var react_hook_form_1 = require("react-hook-form");
var material_1 = require("@mui/material");
var Theme_1 = require("../assets/Theme");
var CreateAMoneylineForm = function (props) {
    var _a = (0, react_hook_form_1.useForm)(), register = _a.register, handleSubmit = _a.handleSubmit, watch = _a.watch, errors = _a.formState.errors;
    var gameToBet = watch('gameToBet');
    var onSubmit = function (data) { return console.log(data); };
    var wagerGame = props.games.filter(function (game) { return game.id === gameToBet; });
    return (react_1["default"].createElement(material_1.Box, { marginY: '200px', sx: {
            width: 400,
            height: 270,
            borderRadius: 5,
            display: 'flex',
            flexDirection: 'column',
            // bgcolor: '#007FFF',
            bgcolor: Theme_1.Colors.iceCold,
            borderColor: '#000000',
            border: '2px solid',
            alignContent: 'center',
            justifyContent: 'center',
            alignItems: 'center'
        } },
        react_1["default"].createElement("form", { onSubmit: handleSubmit(onSubmit) },
            react_1["default"].createElement(material_1.Box, { display: 'flex', flexDirection: 'row' },
                react_1["default"].createElement("select", __assign({}, register("gameToBet", { required: true }), { className: "gameToBet" }), props.games.map(function (game) { return (react_1["default"].createElement("option", { key: "".concat(game.id), value: game.id },
                    game.away,
                    " @ ",
                    game.home)); }))),
            react_1["default"].createElement(material_1.Box, null,
                react_1["default"].createElement("select", __assign({}, register("side", { required: true }), { className: "side" }), props.games.filter(function (game) {
                    return game.id == gameToBet;
                }).map(function (game) {
                    return react_1["default"].createElement(react_1["default"].Fragment, null,
                        react_1["default"].createElement("option", { value: "away-side" },
                            "Away: ",
                            game.away),
                        react_1["default"].createElement("option", { value: "home-side" },
                            "Home: ",
                            game.home));
                }))),
            react_1["default"].createElement(material_1.Box, { display: 'flex', flexDirection: 'column' },
                react_1["default"].createElement(material_1.Box, { display: 'flex', flexDirection: 'row' },
                    react_1["default"].createElement(material_1.Typography, null, "$"),
                    react_1["default"].createElement("input", __assign({ type: "text" }, register("dollarAmount", { required: true }), { placeholder: "100" })),
                    errors.dollarAmount && react_1["default"].createElement("span", null, "This field is required")),
                react_1["default"].createElement(material_1.Box, { display: 'flex', flexDirection: 'row' },
                    react_1["default"].createElement("select", __assign({}, register("position", { required: true }), { className: "form-select" }),
                        react_1["default"].createElement("option", { value: "", disabled: true }, "Odds"),
                        react_1["default"].createElement("option", { key: "plus", value: "plus" }, "+"),
                        react_1["default"].createElement("option", { key: "minus", value: "minus" }, "-")),
                    react_1["default"].createElement("input", __assign({ type: "text" }, register("odds", { required: true }), { placeholder: "100" })),
                    errors.dollarAmount && react_1["default"].createElement("span", null, "This field is required"))),
            react_1["default"].createElement("input", { type: "submit" }))));
};
exports.CreateAMoneylineForm = CreateAMoneylineForm;
