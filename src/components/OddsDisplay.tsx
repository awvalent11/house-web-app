import {Box, Stack, Typography } from "@mui/material";
import {Colors} from '../assets/Theme.ts';
import dayjs from "dayjs";
import { odd } from "../assets/dummydata.ts";
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

    return(
        <Stack 
        // space='xs'
        >
            <Typography
                fontFamily='Army-Medium'
                fontSize={12}
                color={Colors.zinc600}
            >
                {props.odd.sportsBook}
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
                >
                    <Typography
                        fontFamily='Army-Medium'
                        color={
                           ""
                        }
                        fontSize={12}
                    >
                        {parseOddsFormat(props.oddsFormat)}
                        {props.odd.pointsSpread}
                    </Typography>
                </Box>
            </Stack>
        </Stack>
    )
}