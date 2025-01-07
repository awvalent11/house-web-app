import axios from "axios";
import { dummyGames, PastBet } from "../assets/dummydata.ts";
import React, {useEffect, useState} from "react";
import { exampleGameType } from "../assets/dummydata.ts";
import { OddsCardWeb } from "./OddsCardWeb.tsx";
import { Box, Grid, Grid2, Typography } from "@mui/material";

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

export const OddsMarketplace = () => {
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
        <Grid2 
            container 
            direction={'column'} 
            spacing={8} 
            alignItems={'center'}
        >
            <Grid2>
                <Typography
                    variant="h2"
                    position={'relative'}
                    sx={{
                        top: '80px'
                    }}
                >
                    Odds Marketplace
                </Typography>
            </Grid2>      
            <Grid2 spacing={2}>
                {games.map(
                    game => {
                        return(
                            <OddsCardWeb game={game}/>
                            )
                        }
                )}
            </Grid2>
        </Grid2>
        </>
    )

}