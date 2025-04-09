"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.OddsDisplay = void 0;
var material_1 = require("@mui/material");
var Theme_1 = require("../assets/Theme");
var dayjs_1 = __importDefault(require("dayjs"));
var react_1 = __importDefault(require("react"));
var OddsDisplay = function (props) {
    var bet = {
        id: 3,
        home: "NY",
        away: "WAS",
        odds: 600,
        expiration: (0, dayjs_1["default"])('2024-10-01'),
        position: 100,
        payoff: 600
    };
    var parseOddsFormat = function (oddsFormat) {
        switch (oddsFormat) {
            case "pointsSpread":
                return props.odd.pointsSpread;
            case "overUnder":
                return props.odd.overUnder;
            case "homeMoneyLine":
                return props.odd.homeMoneyLine;
            case "awayMoneyLine":
                return props.odd.awayMoneyLine;
            default:
                return props.odd.pointsSpread;
        }
    };
    var displaySportsbook = function (sportsBook) {
        if (sportsBook == 'Playsugarhouse') {
            return 'Suga';
        }
        else {
            return sportsBook;
        }
    };
    return (react_1["default"].createElement(material_1.Stack
    // space='xs'
    , { 
        // space='xs'
        sx: {
            border: '1px solid',
            borderColor: Theme_1.Colors.freezePurple,
            borderRadius: 0.5,
            width: '60px'
        } },
        react_1["default"].createElement(material_1.Typography, { fontFamily: 'Army-Medium', fontSize: 12, color: Theme_1.Colors.heavyPurple }, displaySportsbook(props.odd.sportsBook)),
        react_1["default"].createElement(material_1.Stack
        // flexDirection={'horizontal'}
        // alignItems='center'
        // space='md'
        , null,
            react_1["default"].createElement(material_1.Box
            // justifyContent='center'
            // paddingHorizontal={15}
            // paddingVertical={1.5}
            // borderRadius={8}
            // borderWidth={1}
            // borderColor={
            //     "$black"
            // }
            // backgroundColor={
            //     "$green200"
            // }
            , { 
                // justifyContent='center'
                // paddingHorizontal={15}
                // paddingVertical={1.5}
                // borderRadius={8}
                // borderWidth={1}
                // borderColor={
                //     "$black"
                // }
                // backgroundColor={
                //     "$green200"
                // }
                sx: {
                    display: 'flex',
                    flexDirection: 'column'
                } },
                react_1["default"].createElement(material_1.Typography, { fontFamily: 'Army-Medium', color: Theme_1.Colors.heavyPurple, fontSize: 12 }, parseOddsFormat(props.oddsFormat)),
                react_1["default"].createElement(material_1.Typography, { fontFamily: 'Army-Medium', color: Theme_1.Colors.heavyPurple, fontSize: 12 }, props.odd.pointsSpread)))));
};
exports.OddsDisplay = OddsDisplay;
