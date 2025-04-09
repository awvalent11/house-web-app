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
exports.App = void 0;
var react_1 = __importStar(require("react"));
require("./App.css");
// @ts-ignore
var ResponsiveAppBar_tsx_1 = require("./components/ResponsiveAppBar.tsx");
// @ts-ignore
var SideBar_tsx_1 = require("./components/SideBar.tsx");
var material_1 = require("@mui/material");
// @ts-ignore
var OddsMarketplace_tsx_1 = require("./components/OddsMarketplace.tsx");
// @ts-ignore
var CreateABetForm_tsx_1 = require("./components/CreateABetForm.tsx");
// @ts-ignore
var dummydata_ts_1 = require("./assets/dummydata.ts");
var axios_1 = __importDefault(require("axios"));
var App = function () {
    var _a = (0, react_1.useState)(dummydata_ts_1.dummyGames), nflGames = _a[0], setNFLGames = _a[1];
    var _b = (0, react_1.useState)([]), mlbGames = _b[0], setMLBGames = _b[1];
    var _c = (0, react_1.useState)("NFL"), leagueType = _c[0], setLeagueType = _c[1];
    (0, react_1.useEffect)(function () {
        axios_1["default"].get('http://web-app-to-scraper-api-svc:83/scrape')
            .then(function (res) { return console.log(res.data); });
        // .then(data => setMLBGames(data))
        // reaches out to odds-api and populates this upcoming week's games into state
        //this should be a paganation thing where the ancillary leagueType data is loaded after primary
        //leagueType so there is not a re-render whenever the user toggle leagueType
    }, [leagueType]);
    var handleLeagueType = function (leagueType) {
        setLeagueType(leagueType);
    };
    return (react_1["default"].createElement("div", { className: "App" },
        react_1["default"].createElement(material_1.Grid2, { container: true },
            react_1["default"].createElement(material_1.Grid2, { size: 3 },
                react_1["default"].createElement(SideBar_tsx_1.SideBar, { handleLeagueType: handleLeagueType })),
            react_1["default"].createElement(material_1.Grid2, { size: 9, alignItems: "center" },
                react_1["default"].createElement(ResponsiveAppBar_tsx_1.ResponsiveAppBar, null),
                react_1["default"].createElement(material_1.Typography, { position: 'relative', marginTop: '100px', marginBottom: '0px', variant: "h3" }, leagueType),
                react_1["default"].createElement(OddsMarketplace_tsx_1.OddsMarketplace, null),
                react_1["default"].createElement(CreateABetForm_tsx_1.CreateABetForm, { games: nflGames })))));
};
exports.App = App;
