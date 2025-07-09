import {Colors} from "../assets/Theme";
import {Box, Typography} from "@mui/material";
import {OddsDisplay} from "./OddsDisplay";
import React from "react";
import MLBTeam from "../MLBTeam";


export type DummyMLBCardProps = {
    mlbTeam:MLBTeam
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
                    {props.mlbTeam.team}
                </h2>
                <Box

                >
                </Box>
            </Box>

            <Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        paddingX: 2,
                        justifyContent: 'space-evenly'
                    }}
                >
                    {props.mlbTeam.odds.map( odd => {
                        return(
                            <Box
                                sx={{
                                    p:0.75,
                                    borderRadius: 4,
                                    borderColor: '#000000'
                                }}
                            >
                                {/*<OddsDisplay odd={odd} oddsFormat={oddsFormat}/>*/}
                                {odd}
                            </Box>
                        )}
                    )}
                </Box>
            </Box>
        </Box>
    )
}