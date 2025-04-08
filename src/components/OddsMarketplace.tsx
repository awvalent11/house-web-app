import axios from "axios";
import { dummyGames } from "../assets/dummydata";
import React, {useEffect, useState} from "react";
import { OddsCardWeb } from "./OddsCardWeb";
import { Box, Grid2, Typography } from "@mui/material";

type OddsMarketplaceProps = {
    league:String
}

export type Game = {
    id: number
    home: String
    away: String
    odds: Odds[]
}

export type Odds = {
    pointsSpread: number
    overUnder: number
    moneyLine: number
    sportsBook: String
}

export const OddsMarketplace = (props: OddsMarketplaceProps) => {
    const [games, setGames] = useState(dummyGames);
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

    return(
        <>
            <Box
            alignContent={'center'}
             position={'relative'}
             
             sx={{
                 top: '20px'
             }}
            >
                <Typography
                    variant="h2"
                >
                    Odds Marketplace
                </Typography>
            </Box>      
            <Grid2 
            container
            display={'flex'}
            position={'relative'}
            sx = {{
                top: '40px'
            }}
            flexDirection={'row'}
            flexWrap={'wrap'}
            spacing={2}
            width={'100%'}
            >
                {games.map(
                    game => {
                        return(
                            // <Box
                                // display={'flex'}
                                // flexDirection={'row'}
                                // flexWrap={'wrap'}
                            // >
                                   <OddsCardWeb game={game}/>
                            // </Box>
                            )
                        }
                )}
            </Grid2>
        </>
    )

}