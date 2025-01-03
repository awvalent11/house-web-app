import React from 'react';
import './App.css';
import { ResponsiveAppBar } from './components/ResponsiveAppBar.tsx';
import { Hey } from './components/Hey.tsx';
import { SideBar } from './components/SideBar.tsx';
import { Box } from '@mui/material';

export const App = () => {
  return (
    <div className="App">
      <Box>
        <SideBar />
      </Box>
      <Box position={"relative"}>
        <ResponsiveAppBar />
      </Box>
      {/* <Body /> */}
    </div>
  );
}
