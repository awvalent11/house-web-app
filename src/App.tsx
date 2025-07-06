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

type MLBTeamType = {
    team: String
    odds: number[]
}


export const cast = (mixedArray, n ) => {
    const arrayToReturn = [];

    // Use a standard for loop to control the index
    for (let i = 0; i < mixedArray.length; i++) {
        // Check if the current element is a string using the typeof operator
        if (typeof mixedArray[i] === 'string') {
            // If it's a string, start extracting the next 'n' elements
            // We start the extraction from the element after the current string (i + 1)
            const team = new MLBTeam(mixedArray[i],[])
            for (let j = 0; j < n; j++) {
                // Calculate the index of the element to be added
                const nextIndex = i + 1 + j;

                // Check if the nextIndex is within the bounds of the array
                if (nextIndex < mixedArray.length) {
                    // Add the element to the new array
                    team.odds.push(mixedArray[nextIndex]);
                } else {
                    arrayToReturn.push(team)
                    // Break the inner loop if we reach the end of the array
                    break;
                }
            }
            // After finding a string and adding the next n elements,
            // you might want to skip the elements you just added in the main loop.
            // This line is optional, depending on your desired behavior.
            // If you want to continue scanning from the element after the block you just added, uncomment the line below.
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
    axios.get('http://web-app-to-scraper-api-svc:83/scrape')
    // axios.get('http://localhost:8081/scrape')
         .then(res => cast(res.data, 10))
         .then(data => setMLBGames(data))
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
