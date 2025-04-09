import React, { useEffect, useState } from 'react';
import './App.css';
// @ts-ignore
import { ResponsiveAppBar } from './components/ResponsiveAppBar.tsx';
// @ts-ignore
import { SideBar } from './components/SideBar.tsx';
import {Grid2, Typography,} from '@mui/material';
// @ts-ignore
import { OddsMarketplace } from './components/OddsMarketplace.tsx';
// @ts-ignore
import { CreateABetForm } from './components/CreateABetForm.tsx';
// @ts-ignore
import { dummyGames } from './assets/dummydata.ts';
// @ts-ignore
import { SelectLeaugeButton } from './components/SelectALeagueButton.tsx';
import axios from "axios";


export const App = () => {
  const [nflGames, setNFLGames] = useState(dummyGames);
  const [mlbGames, setMLBGames] = useState([]);
  const [leagueType, setLeagueType] = useState("NFL");

  useEffect(()=> {
    axios.get('http://web-app-to-scraper-api-svc:83/scrape')
         .then(res => console.log(res.data))
         // .then(data => setMLBGames(data))
    // reaches out to odds-api and populates this upcoming week's games into state
    //this should be a paganation thing where the ancillary leagueType data is loaded after primary
    //leagueType so there is not a re-render whenever the user toggle leagueType
  }, [leagueType])

  const handleLeagueType  = (leagueType: string) => {
      setLeagueType(leagueType)
  }

    return (
      <div className="App">
        <Grid2 container>
          <Grid2 size={3}>
              <SideBar handleLeagueType={handleLeagueType}/>
          </Grid2>
          <Grid2 size={9} alignItems={"center"}>
            <ResponsiveAppBar />
              <Typography
                  position={'relative'}
                  marginTop={'100px'}
                  marginBottom={'0px'}
                  variant={"h3"}>
                  {leagueType}
              </Typography>
             <OddsMarketplace />
            <CreateABetForm games={nflGames}/>
          </Grid2>
        </Grid2>
      </div>
    )

}
