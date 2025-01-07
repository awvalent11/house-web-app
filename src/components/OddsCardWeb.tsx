import React, { useState } from "react";
import { exampleGameType } from "../assets/dummydata";
import { Box, Grid2, Typography } from '@mui/material';
import { OddsDisplay } from "./OddsDisplay.tsx";
import { Colors } from "../assets/Theme.ts";
import localizedFormat from "dayjs/plugin/localizedFormat";
import dayjs from "dayjs";
// import localizedFormat from 'dayjs/plugin/localizedFormat' // ES 2015

dayjs.extend(localizedFormat);

dayjs().format("L LT");

type OddsCardProps = {
    game: exampleGameType
}

type OddsProp = {
    odds: Number[]
}



export const OddsCardWeb = (props: OddsCardProps) => {
    const [oddsFormat, setOddsFormat] = useState('homeMoneyLine');
    const toggleOddsFormat = () => {
        switch(oddsFormat) {
            case "pointsSpread":
                setOddsFormat("overUnder")
                break;
            case "overUnder":
                setOddsFormat("homeMoneyLine")
                break;
            case "homeMoneyLine":
                setOddsFormat("awayMoneyLine")
                break;
            default:
            setOddsFormat("pointsSpread")
        }
    }

    const displayOddsFormat =(oddsFormat: string, props: OddsCardProps) => {
        switch(oddsFormat){
            case "pointsSpread":
                return props.game.home+" Spread"
            case "overUnder":
                return "Over-Under"
            case "homeMoneyLine":
                return props.game.home+" Moneyline"
            case "awayMoneyLine":
                return props.game.away +" Moneyline"
            default:
                return props.game.home+" Spread"
        }
    }

    return(
        <Box
        sx={{
            width: 400,
            height: 270,
            borderRadius: 5,
            // bgcolor: '#007FFF',
            bgcolor: Colors.iceCold,
            borderColor: '#000000',
            border: '2px solid',
            marginX: 3,
            marginY: 2
        
        }}
        >
            <Box
                sx= {{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent:'space-between',
                    paddingX: '5px',
                    paddingBottom: '0px'
                    }}
            >
                <h2>
                    {props.game.away} @ {props.game.home}
                </h2>
                <Box
                onClick={toggleOddsFormat}
                alignContent={'center'}
                >
                    <Typography
                    variant="body1"
                    noWrap
                    >
                        {displayOddsFormat(oddsFormat, props)}
                    </Typography>
                </Box>
            </Box>
            {props.game.startTime && ( 
                <Box
                paddingTop={'0px'}
                marginBottom={'15px'}
                >
                    <Typography
                    variant="caption"
                    >
                        Game Day: {props.game.startTime.format('dddd, h:mmA, MMMM DD, YYYY')}
                    </Typography> 
                </Box>
            )}
            <Box>
                <Box 
                    sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    paddingX: 2,
                    justifyContent: 'space-evenly'
                    }}
                >
                {props.game.odds.map( odd => {
                    return(
                        <Box
                            sx={{
                                p:0.75,
                                borderRadius: 4,
                                borderColor: '#000000'
                                }}
                        >
                            <OddsDisplay odd={odd} oddsFormat={oddsFormat}/>
                        </Box>
                        )}
                )}
                </Box>
            </Box>   
        </Box>
    )
}