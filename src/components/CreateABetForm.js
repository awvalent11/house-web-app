"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.CreateABetForm = void 0;
var react_1 = require("react");
var react_hook_form_1 = require("react-hook-form");
var material_1 = require("@mui/material");
var CreateAMoneylineForm_1 = require("./CreateAMoneylineForm");
var MenuItem_1 = __importDefault(require("@mui/material/MenuItem"));
var react_2 = __importDefault(require("react"));
// onBlur validation for whether a game exists and is in range of payment service
var CreateABetForm = function (props) {
    var _a = (0, react_1.useState)(props.games), games = _a[0], setGames = _a[1];
    var _b = (0, react_1.useState)('spread'), betType = _b[0], setBetType = _b[1];
    var _c = (0, react_hook_form_1.useForm)(), register = _c.register, handleSubmit = _c.handleSubmit, watch = _c.watch, errors = _c.formState.errors;
    var onSubmit = function (data) {
        console.log("You're hitting me!");
        setBetType(data.betType);
    };
    var gameToBet = watch('gameToBet');
    var wagerGame = games.filter(function (game) { return game.id === gameToBet; });
    var handleChange = function (event) {
        setBetType(event.target.value);
    };
    var options = [
        { value: 'moneyline', label: 'Moneyline' },
        { value: 'over-under', label: 'Over Under' },
        { value: 'spread', label: 'Spread' }
    ];
    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    return (react_2["default"].createElement(material_1.Box, { marginY: '200px' },
        react_2["default"].createElement(material_1.Box, { padding: '0px', sx: {
                //
                marginX: 0,
                marginY: 0,
                padding: 0
                // width: 50,
                // height: 70,
                // borderRadius: 5,
                // display: 'flex',
                // // bgcolor: '#007FFF',
                // bgcolor: Colors.brutalBlue,
                // borderColor: '#000000',
                // border: '5px solid',
                // justifyContent: 'left',
            } },
            react_2["default"].createElement(material_1.Select, { value: betType, onChange: handleChange }, options.map(function (option) { return (react_2["default"].createElement(MenuItem_1["default"], { key: option.label, value: option.value }, option.label)); }))),
        betType === 'moneyline' && react_2["default"].createElement(CreateAMoneylineForm_1.CreateAMoneylineForm, { games: games, gameToBet: gameToBet }),
        betType === 'spread' && react_2["default"].createElement(react_2["default"].Fragment, null, "Hey :) "),
        betType === 'over-under' && react_2["default"].createElement(react_2["default"].Fragment, null, "Howdey :D ")));
};
exports.CreateABetForm = CreateABetForm;
