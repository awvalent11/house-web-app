import React, { useEffect } from 'react';
import './App.css';
import { ResponsiveAppBar } from './components/ResponsiveAppBar.tsx';
import { SideBar } from './components/SideBar.tsx';
import { Grid2, } from '@mui/material';
import { OddsMarketplace } from './components/OddsMarketplace.tsx';
import { CreateABetForm } from './components/CreateABetForm.tsx';
import { dummyGames } from './assets/dummydata.ts';


export const App = () => {
  // useEffect(()=> {
  //   axios.get(/*GameService*/)

  // }, [leagueType])

  return (
    <div className="App">
      <Grid2 container>
        <Grid2 size={3}>
            <SideBar/>
        </Grid2>
        <Grid2 size={9} alignItems={"center"}>
          <ResponsiveAppBar />
          {/* <OddsMarketplace /> */}
          <CreateABetForm games={dummyGames}/>
        </Grid2>
      </Grid2>
    </div>
  );
}
