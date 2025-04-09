"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.OddsCardWeb = void 0;
var react_1 = __importStar(require("react"));
var material_1 = require("@mui/material");
var OddsDisplay_1 = require("./OddsDisplay");
var Theme_1 = require("../assets/Theme");
var localizedFormat_1 = __importDefault(require("dayjs/plugin/localizedFormat"));
var dayjs_1 = __importDefault(require("dayjs"));
// import localizedFormat from 'dayjs/plugin/localizedFormat' // ES 2015
dayjs_1["default"].extend(localizedFormat_1["default"]);
(0, dayjs_1["default"])().format("L LT");
var OddsCardWeb = function (props) {
    var _a = (0, react_1.useState)('homeMoneyLine'), oddsFormat = _a[0], setOddsFormat = _a[1];
    var toggleOddsFormat = function () {
        switch (oddsFormat) {
            case "pointsSpread":
                setOddsFormat("overUnder");
                break;
            case "overUnder":
                setOddsFormat("homeMoneyLine");
                break;
            case "homeMoneyLine":
                setOddsFormat("awayMoneyLine");
                break;
            default:
                setOddsFormat("pointsSpread");
        }
    };
    var displayOddsFormat = function (oddsFormat, props) {
        switch (oddsFormat) {
            case "pointsSpread":
                return props.game.home + " Spread";
            case "overUnder":
                return "Over-Under";
            case "homeMoneyLine":
                return props.game.home + " Moneyline";
            case "awayMoneyLine":
                return props.game.away + " Moneyline";
            default:
                return props.game.home + " Spread";
        }
    };
    return (react_1["default"].createElement(material_1.Box, { sx: {
            width: 400,
            height: 270,
            borderRadius: 5,
            // bgcolor: '#007FFF',
            bgcolor: Theme_1.Colors.iceCold,
            borderColor: '#000000',
            border: '2px solid',
            marginX: 3,
            marginY: 2
        } },
        react_1["default"].createElement(material_1.Box, { sx: {
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingX: '5px',
                paddingBottom: '0px'
            } },
            react_1["default"].createElement("h2", null,
                props.game.away,
                " @ ",
                props.game.home),
            react_1["default"].createElement(material_1.Box, { onClick: toggleOddsFormat, alignContent: 'center' },
                react_1["default"].createElement(material_1.Typography, { variant: "body1", noWrap: true }, displayOddsFormat(oddsFormat, props)))),
        props.game.startTime && (react_1["default"].createElement(material_1.Box, { paddingTop: '0px', marginBottom: '15px' },
            react_1["default"].createElement(material_1.Typography, { variant: "caption" },
                "Game Day: ",
                props.game.startTime.format('dddd, h:mmA, MMMM DD, YYYY')))),
        react_1["default"].createElement(material_1.Box, null,
            react_1["default"].createElement(material_1.Box, { sx: {
                    display: 'flex',
                    flexWrap: 'wrap',
                    paddingX: 2,
                    justifyContent: 'space-evenly'
                } }, props.game.odds.map(function (odd) {
                return (react_1["default"].createElement(material_1.Box, { sx: {
                        p: 0.75,
                        borderRadius: 4,
                        borderColor: '#000000'
                    } },
                    react_1["default"].createElement(OddsDisplay_1.OddsDisplay, { odd: odd, oddsFormat: oddsFormat })));
            })))));
};
exports.OddsCardWeb = OddsCardWeb;
