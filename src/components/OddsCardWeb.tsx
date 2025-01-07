import React, { useState } from "react";
import { exampleGameType } from "../assets/dummydata";
import { Box, Grid2 } from '@mui/material';
import { OddsDisplay } from "./OddsDisplay.tsx";
import { Colors } from "../assets/Theme.ts";

type OddsCardProps = {
    game: exampleGameType
}

type OddsProp = {
    odds: Number[]
}



export const OddsCardWeb = (props: OddsCardProps) => {
    const [oddsFormat, setOddsFormat] = useState('homeMoneyLine');
    const toggleOddsFormat = () => {
        // switch(oddsFormat) {
        //     case "pointsSpread":
        //         setOddsFormat("overUnder")
        //         break;
        //     case "overUnder":
        //         setOddsFormat("homeMoneyLine")
        //         break;
        //     case "homeMoneyLine":
        //         setOddsFormat("awayMoneyLine")
        //         break;
        //     default:
        //     setOddsFormat("pointsSpread")
        window.alert("Hey ;)")
        // }
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
            bgcolor: '#007FFF',
            borderColor: '#000000',
            border: '2px solid',
            // display: 'flex',
            // flexDirection: 'column',
            margin: 6
        }}
        >
            {/* <Box> */}
                    <Box
                     sx= {{
                    // //     space='sm'
                    //     width: '100%',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent:'space-between',
                        paddingX: 4,
                    //     // alignItems: 'row'
                    }}
                    >
                        <h2>
                            {props.game.away} @ {props.game.home}
                        </h2>
                        <h3>
                            {oddsFormat}
                        </h3>
                    </Box>
                    {/* <Box                 
                        // space='sm'
                        // alignItems='center'
                        // alignContent='center'
                    >
                        <div
                            onClick={() => {
                                toggleOddsFormat()
                            }
                        }
                        >
                            <h3>
                                {displayOddsFormat(oddsFormat, props)}
                            </h3>
                        </div>
                    </Box> */}
                    {props.game.startTime && ( 
                        <Box  
                        // direction={"row"} 
                        // space='md' 
                        // alignItems='center'
                        >
                            {/* <Clock8 size='20' color={Colors.zinc600} /> */}
                            <h3
                                // flexShrink={1}
                                // fontFamily='Army-Regular'
                                // fontSize={14}
                                // lineHeight={18}
                                // color={Colors.zinc800}
                            >
                                Game Day: {props.game.startTime.format()}
                            </h3> 
                        </Box>
                    )}
                        <Box 
                        // direction={"row"} 
                        // justifyContent='space-between'
                        >
                                <Box 
                                    sx={{
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        paddingX: 2,
                                        justifyContent: 'space-evenly'
                                    }}
                                // alignItems='flex-start'
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
            {/* </Box> */}
        </Box>
    )
}