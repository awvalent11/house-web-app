import {Colors} from "../assets/Theme";
import {Box, Typography} from "@mui/material";
import {OddsDisplay} from "./OddsDisplay";
import React from "react";


export type DummyMLBCardProps = {
    teamName:string
    odds:number[]
}

export const DummyMLBCard = (props: DummyMLBCardProps) => {

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
                    {props.teamName}
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