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
import MLBTeam from "./MLBTeam";
import {dummyData} from './__tests__/frontend_test.test.js'

type MLBTeamType = {
    team: String
    odds: number[]
}

export const teams = [
    'Yankees', 'Padres', 'Phillies', 'Cardinals', 'Twins', 'Marlins', 'Pirates',
    'Tigers', 'Nationals', 'Blue', 'Athletics', 'Royals', 'Mariners', 'Dodgers'
]


export  const cast = (mixedArray, n ) => {
    const arrayToReturn = [];
    for (let i = 0; i < mixedArray.length; i++) {
        if (teams.includes(mixedArray[i])) {
            const team = new MLBTeam(mixedArray[i],[])
            for (let j = 0; j < n; j++) {
                const nextIndex = i + 1 + j;
                if (nextIndex < mixedArray.length) {
                    team.odds.push(Number(mixedArray[nextIndex]))
                }
            }
            arrayToReturn.push(team)
            i = i + n;
        }
    }
    return arrayToReturn;
}


export const App = () => {
  const [nflGames, setNFLGames] = useState(dummyGames);
  const [mlbGames, setMLBGames] = useState([]);
  const [leagueType, setLeagueType] = useState("MLB");


  useEffect(()=> {
    console.log("You're hitting the useEffect!");
    // console.log("You're hitting me!")
    // axios.get('http://web-app-to-scraper-api-svc:83/scrape')
    // axios.get('http://localhost:8081/scrape')
      setMLBGames(cast(dummyData, 10))
      console.log(mlbGames)
         // .then(res => cast(res.data, 10))
         // .then(data => setMLBGames(data))
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
             <OddsMarketplace mlbGames={mlbGames}/>
            <CreateABetForm games={nflGames}/>
          </Grid2>
        </Grid2>
      </div>
    )

}
