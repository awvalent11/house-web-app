import axios from "axios";
import { dummyGames } from "../assets/dummydata";
import React, {useEffect, useState} from "react";
import { OddsCardWeb } from "./OddsCardWeb";
import { Box, Grid2, Typography } from "@mui/material";

type OddsMarketplaceProps = {
    leagueType:String
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

const dummyData = ['Yankees', '-169', '-167', '-165', '-168', '-170', '-165', '-164', '-165', '-165',
    '-168', 'Blue', 'Jays', '+138', '+140', '+140', '+138', '+143', '+140', '+138', '+140', '+138', '+138',
    'Padres', '+144', '+145', '+135', '+137', '+140', '+140', '+136', '+138', '+138', '+137',
    'Phillies', '-176', '-173', '-160', '-167', '-165', '-165', '-162', '-159', '-167', '-167',
    'Cardinals', '+140', '+135', '+140', '+130', '+130', '+135', '+132', '+138', '+138', '+130']

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