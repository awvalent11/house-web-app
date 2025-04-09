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
exports.SideBar = void 0;
var React = __importStar(require("react"));
var Box_1 = __importDefault(require("@mui/material/Box"));
var Drawer_1 = __importDefault(require("@mui/material/Drawer"));
var CssBaseline_1 = __importDefault(require("@mui/material/CssBaseline"));
var List_1 = __importDefault(require("@mui/material/List"));
var Divider_1 = __importDefault(require("@mui/material/Divider"));
var ListItem_1 = __importDefault(require("@mui/material/ListItem"));
var ListItemButton_1 = __importDefault(require("@mui/material/ListItemButton"));
var ListItemIcon_1 = __importDefault(require("@mui/material/ListItemIcon"));
var ListItemText_1 = __importDefault(require("@mui/material/ListItemText"));
var Mail_1 = __importDefault(require("@mui/icons-material/Mail"));
// @ts-ignore
var nfl_logo_svg_1 = __importDefault(require("../assets/nfl-logo.svg"));
// @ts-ignore
var mlb_logo_icon_248446_svg_1 = __importDefault(require("../assets/mlb_logo_icon_248446.svg"));
// @ts-ignore
var heisman_trophy_svg_1 = __importDefault(require("../assets/heisman_trophy.svg"));
var drawerWidth = '17%';
var SideBar = function (props) {
    var parseLogo = function (index) {
        switch (index) {
            case 2:
                return (React.createElement("img", { src: nfl_logo_svg_1["default"], alt: "NFL", height: '40px', width: '40px' }));
            case 3:
                return (React.createElement("img", { src: mlb_logo_icon_248446_svg_1["default"], alt: "NFL", height: '40px', width: '40px' }));
            case 4:
                return (React.createElement("img", { src: heisman_trophy_svg_1["default"], alt: "NFL", height: '40px', width: '40px' }));
            default:
                return (React.createElement(Mail_1["default"], null));
        }
    };
    var handleClick = function (leagueType) {
        // @ts-ignore
        props.handleLeagueType(leagueType);
    };
    return (React.createElement(Box_1["default"], { sx: { display: 'flex'
        } },
        React.createElement(CssBaseline_1["default"], null),
        React.createElement(Drawer_1["default"], { sx: {
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box'
                }
            }, variant: "permanent", anchor: "left" },
            React.createElement(List_1["default"], null, ['Profile', 'Settings', 'NFL', 'MLB', 'CFB', 'Soccer', 'NBA'].map(function (text, index) { return (React.createElement(ListItem_1["default"], { key: text, disablePadding: true, onClick: function () { return handleClick(text); } },
                React.createElement(ListItemButton_1["default"], null,
                    React.createElement(ListItemIcon_1["default"], null, parseLogo(index)),
                    React.createElement(ListItemText_1["default"], { primary: text })))); })),
            React.createElement(Divider_1["default"], null))));
};
exports.SideBar = SideBar;
