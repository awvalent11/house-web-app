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
exports.__esModule = true;
exports.OddsMarketplace = void 0;
var dummydata_1 = require("../assets/dummydata");
var react_1 = __importStar(require("react"));
var OddsCardWeb_1 = require("./OddsCardWeb");
var material_1 = require("@mui/material");
var OddsMarketplace = function (props) {
    var _a = (0, react_1.useState)(dummydata_1.dummyGames), games = _a[0], setGames = _a[1];
    // useEffect(() => {
    //     // axios.get("http://k8s-game2048-nflingre-04613a5480-994585251.us-east-2.elb.amazonaws.com/gambling-api/nfl-week-games")
    //     axios.get("https://api.sportsdata.io/v3/nfl/odds/json/GameOddsByWeek/2024/7?key=a1c6821b242546c180c07e0d1e508670")
    //         .then((res: any) => {
    //             console.log(res.data)
    //             setGames(res.data)
    //         })
    // }, [])
    // const games = axios.get("http")
    // games.map(game => return(
    //     <Odds
    // ))
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(material_1.Box, { alignContent: 'center', position: 'relative', sx: {
                top: '20px'
            } },
            react_1["default"].createElement(material_1.Typography, { variant: "h2" }, "Odds Marketplace")),
        react_1["default"].createElement(material_1.Grid2, { container: true, display: 'flex', position: 'relative', sx: {
                top: '40px'
            }, flexDirection: 'row', flexWrap: 'wrap', spacing: 2, width: '100%' }, games.map(function (game) {
            return (
            // <Box
            // display={'flex'}
            // flexDirection={'row'}
            // flexWrap={'wrap'}
            // >
            react_1["default"].createElement(OddsCardWeb_1.OddsCardWeb, { game: game })
            // </Box>
            );
        }))));
};
exports.OddsMarketplace = OddsMarketplace;
