import { useEffect, useState } from 'react';
import './App.css';
import { ResponsiveAppBar } from './components/ResponsiveAppBar.tsx';
import { SideBar } from './components/SideBar.tsx';
import { Grid2, } from '@mui/material';
import { OddsMarketplace } from './components/OddsMarketplace';
import { CreateABetForm } from './components/CreateABetForm.tsx';
import { dummyGames } from './assets/dummydata.ts';
import { SelectLeaugeButton } from './components/SelectALeagueButton.tsx';


export const App = () => {
  const [nflGames, setNFLGames] = useState(dummyGames);
  const [mlbGames, setMLBGames] = useState([]);
  const [leagueType, setLeagueType] = useState("NFL");
  useEffect(()=> {
    // axios.get(/*GameService*/)
    // reaches out to GameSerivce and populates this upcoming week's games into state

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
            <SelectLeaugeButton setLeagueType={setLeagueType} />
            {/* <OddsMarketplace /> */}
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
              <SideBar/>
          </Grid2>
          <Grid2 size={9} alignItems={"center"}>
            <ResponsiveAppBar />
            {/* <OddsMarketplace /> */}
            <CreateABetForm games={mlbGames}/>
          </Grid2>
        </Grid2>
      </div>
    );
  }
}
