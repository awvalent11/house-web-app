import { useEffect, useState } from 'react';
import './App.css';
// @ts-ignore
import { ResponsiveAppBar } from './components/ResponsiveAppBar.tsx';
// @ts-ignore
import { SideBar } from './components/SideBar.tsx';
import { Grid2, } from '@mui/material';
// @ts-ignore
import { OddsMarketplace } from './components/OddsMarketplace.tsx';
// @ts-ignore
import { CreateABetForm } from './components/CreateABetForm.tsx';
// @ts-ignore
import { dummyGames } from './assets/dummydata.ts';
// @ts-ignore
import { SelectLeaugeButton } from './components/SelectALeagueButton.tsx';


export const App = () => {
  const [nflGames, setNFLGames] = useState(dummyGames);
  const [mlbGames, setMLBGames] = useState([]);
  const [leagueType, setLeagueType] = useState("NFL");
  useEffect(()=> {
    // axios.get(/*odds-api/leagueType*/
    // reaches out to odds-api and populates this upcoming week's games into state

  }, [leagueType])

  if(leagueType==="NFL"){
    return (
      <div className="App">
        <Grid2 container>
          <Grid2 size={3}>
              <SideBar/>
          </Grid2>
          <Grid2 size={9} alignItems={"center"}>
            <ResponsiveAppBar />
             <OddsMarketplace />
            <CreateABetForm games={nflGames}/>
          </Grid2>
        </Grid2>
      </div>
    )
  } else if(leagueType==="MLB"){
    return (
      <div className="App">
        <Grid2 container>
          <Grid2 size={3}>
              <SideBar setLeagueType={setLeagueType}/>
          </Grid2>
          <Grid2 size={9} alignItems={"center"}>
            <ResponsiveAppBar />
             <OddsMarketplace leagueType={leagueType}/>
            <CreateABetForm games={mlbGames}/>
          </Grid2>
        </Grid2>
      </div>
    );
  }
}
