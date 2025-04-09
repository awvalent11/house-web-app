import {Box, Stack, Typography } from "@mui/material";
import {Colors} from '../assets/Theme';
import dayjs from "dayjs";
import { odd } from "../assets/dummydata";
import React from "react";


type OddsDisplayProps = {
    odd: odd
    oddsFormat: string
}


export const OddsDisplay = (props: OddsDisplayProps) => {
    const bet = {
        id: 3,
        home: "NY",
        away: "WAS",
        odds: 600,
        expiration: dayjs('2024-10-01'),
        position: 100,
        payoff: 600,
    }

    const parseOddsFormat = (oddsFormat: string)=> {
        switch(oddsFormat){
            case "pointsSpread":
                return props.odd.pointsSpread
            case "overUnder":
                return props.odd.overUnder
            case "homeMoneyLine":
                return props.odd.homeMoneyLine
            case "awayMoneyLine":
                return props.odd.awayMoneyLine
            default:
                return props.odd.pointsSpread
        }
    }

    const displaySportsbook = (sportsBook: string) => {
        if(sportsBook == 'Playsugarhouse'){
            return 'Suga';
        } else {
            return sportsBook;
        }
    }

    return(
        <Stack 
        // space='xs'
        sx={{
            border: '1px solid',
            borderColor: Colors.freezePurple,
            borderRadius: 0.5,
            width: '60px'
        }}
        >
            <Typography
                fontFamily='Army-Medium'
                fontSize={12}
                color={Colors.heavyPurple}
            >
                {displaySportsbook(props.odd.sportsBook)}
            </Typography>
            <Stack
                // flexDirection={'horizontal'}
                // alignItems='center'
                // space='md'
            >
                <Box
                    // justifyContent='center'
                    // paddingHorizontal={15}
                    // paddingVertical={1.5}
                    // borderRadius={8}
                    // borderWidth={1}
                    // borderColor={
                    //     "$black"
                    // }
                    // backgroundColor={
                    //     "$green200"
                    // }
                    sx={{
                        display:'flex',
                        flexDirection:'column',
                    }}
                >
                    <Typography
                        fontFamily='Army-Medium'
                        color={
                           Colors.heavyPurple
                        }
                        fontSize={12}
                    >
                        {parseOddsFormat(props.oddsFormat)}
                    </Typography>
                    <Typography
                        fontFamily='Army-Medium'
                        color={
                        Colors.heavyPurple
                        }
                        fontSize={12}
                    >
                        {props.odd.pointsSpread}
                    </Typography>
                </Box>
            </Stack>
        </Stack>
    )
}