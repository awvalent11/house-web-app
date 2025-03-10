import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { ResponsiveAppBar } from './ResponsiveAppBar.tsx';
import  NFLlogo from './nfl-logo.svg'



type SideBarProps = {
    setLeagueType:  React.Dispatch<React.SetStateAction<string>>
}
const drawerWidth = '17%';

export const SideBar = (props: SideBarProps) => {

    const parseLogo = (index: number) => {
        switch(index) {
            case 2:
                return (
                     <img src={NFLlogo} alt="NFL" height={'40px'} width={'40px'}/>)
            default:
                return (<MailIcon/>)
        }
    }


  return (
    <Box sx={{ display: 'flex', 
    }}>
      <CssBaseline />
      {/* <ResponsiveAppBar /> */}
      <Drawer 
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        {/* <Toolbar /> */}
        {/* <Divider /> */}
        <List>
          {['Profile', 'Settings', 'NFL', 'MLB', 'CFB', 'Soccer', 'NBA'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                    {parseLogo(index)}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
    </Box>
  );
}