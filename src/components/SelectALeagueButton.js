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
exports.SelectLeaugeButton = void 0;
var react_1 = __importDefault(require("react"));
var react_hook_form_1 = require("react-hook-form");
var SelectLeaugeButton = function (props) {
    var _a = (0, react_hook_form_1.useForm)(), register = _a.register, handleSubmit = _a.handleSubmit, errors = _a.formState.errors;
    var onSubmit = function (leagueType) {
        // @ts-ignore
        props.setLeagueType(leagueType);
    };
    return (react_1["default"].createElement("form", { onSubmit: handleSubmit(onSubmit) },
        react_1["default"].createElement("select", __assign({}, register("leagueType", { required: true }), { className: "leagueType-button" }),
            "Select A League",
            react_1["default"].createElement("option", { value: "", defaultValue: "NFL", disabled: true }, "NFL"),
            react_1["default"].createElement("option", { key: 'MLB', value: 'moneyline' }, "Moneyline"),
            react_1["default"].createElement("option", { key: 'spread', value: 'spread' }, "Spread"),
            react_1["default"].createElement("option", { key: 'over-under', value: 'over-under' }, "OverUnder"))));
};
exports.SelectLeaugeButton = SelectLeaugeButton;
