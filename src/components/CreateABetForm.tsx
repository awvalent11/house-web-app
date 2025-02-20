import {useEffect, useState} from "react"
import React from 'react';
import { exampleGameType } from "../assets/dummydata";
import { useForm, useWatch } from "react-hook-form";
import { Box, Typography } from "@mui/material";
import { Colors } from "../assets/Theme.ts";


type CreateABetFormProps = {
    games: exampleGameType[]
    //this is populated from the App.tsx level props depending on the leagueType prop
}

type SubmitGameType = {
        home: string,
        away: string,
        odds: number,
        position: string, 
        //As in, side of the bet (+ or -)
        dollarAmount: number
}

export type testGame = {
    id: number
    home: string
    away: string
  }

// onBlur validation for whether a game exists and is in range of payment service

export const CreateABetForm = (props: CreateABetFormProps) => {
    const nflTeams = ["PHI", "DEN", "GB", "CAR", "NO", "KC", "MIN",
        "DAL", "BUF", "CHI", "CIN", "LV", "SF", "ARI", "PIT", "LA Chargers",
        "TB", "NE", "IND", "WSH", "TEN", "JAX", "HOU", "NY Giants", "SEA",
        "NY Jets", "NYG", "DET", "MIA", "CLE", "LA Rams", "ATL"]

    const[games, setGames] = useState(props.games);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data: SubmitGameType) => console.log(data);
    // const onSubmit = (data) => console.log(data)
    const awayTeam = watch('away-team')
    const homeTeam = watch('home-team')
    let otherSide = "Other Side"

    const trimGames = (games: exampleGameType[]) => {
        let gamesToReturn: testGame[] = []
        games.map(game => {
            gamesToReturn.push(
                { id: game.id,
                  home: game.home,
                  away: game.away
                })
        })
        return gamesToReturn;
    }
    const trimmedGames: testGame[] = trimGames(props.games)

    const parseHomeAndAway = (awayTeam: String) => {
        trimmedGames.map((trimmedGame) => {
           if(trimmedGame.away === awayTeam){
            otherSide = trimmedGame.home
           }
        })
        // trimmedGames.map((trimmedGame) => {
        //     if(trimmedGame.home === homeTeam){
        //      otherSide = trimmedGame.away
        //     }
        //  })
    }

    // useEffect(() => {
    //     parseHomeAndAway(homeTeam)
    // }, [awayTeam])
    

    return (
        <Box
        marginY={'200px'}
        sx = {{

            width: 400,
            height: 270,
            borderRadius: 5,
            display: 'flex', 
            // bgcolor: '#007FFF',
            bgcolor: Colors.iceCold,
            borderColor: '#000000',
            border: '2px solid',
            alignContent: 'center', 
            justifyContent: 'center', 
            alignItems: 'center', 
        }}
        >
            <Box>
            
                <form onSubmit={handleSubmit(onSubmit)}>
                    <select 
                            {...register("bet-type", {required:true})}
                            className="bet-type" 
                            >
                            <option value="" defaultValue={"Moneyline"}disabled>Bet Type</option>
                        
                                <option key={'moneyline'} value={'moneyline'}>Moneyline</option>
                                <option key={'spread'} value={'spread'}>Spread</option>
                                <option key={'over-under'} value={'over-under'}>OverUnder</option>
                    </select>
                    <Box
                        display={'flex'}
                        flexDirection={'row'}
                    >
                    
                        <select 
                            {...register("away-team", {required:true})}
                            className="away-select" 
                            >
                            <option value="" disabled>Away</option>
                            {trimmedGames.map((trimmedGame) => (
                                <option key={`${trimmedGame.id}`} value={trimmedGame.away}>
                                {trimmedGame.away}
                                </option>
                            ))}
                        </select>
                        <Typography>
                            vs
                        </Typography>
                        {/* <select 
                            {...register("home-team", {required:true})}
                            className="home-select" 
                            >
                            <option value="" defaultValue={"Home"} disabled>Home</option>
                            {nflTeams.map((team) => (
                                <option key={`home ${team}`} value={team}>
                                {team}
                                </option>
                            ))}
                        </select> */}
                        <Typography>
                            {otherSide}
                        </Typography>
                    </Box>
                    <Box>
                        <select 
                            {...register("side", {required:true})}
                            className="side" 
                            >
                            <option value={"away-side"} >{awayTeam}</option>
                            <option value={"home-side"} >{homeTeam}</option>
                        </select>
                    </Box>
                    <Box
                        display={'flex'}
                        flexDirection={'column'}
                    >
                        <Box
                            display={'flex'}
                            flexDirection={'row'}
                        >
                            <Typography>
                                $
                            </Typography>
                            <input 
                                
                                type="text" 
                                {...register("dollarAmount", { required: true })} 
                                placeholder="100" 
                            />
                            {errors.dollarAmount && <span>This field is required</span>}
                        </Box>
                        <Box
                            display={'flex'}
                            flexDirection={'row'}
                        >
                            <select 
                            {...register("position", {required:true})}
                            className="form-select" 
                            >
                                <option value="" disabled>Odds</option>
                                <option key={"plus"} value={"plus"}>
                                +
                                </option>
                                <option key={"minus"} value={"minus"}>
                                -
                                </option>
                            </select>
                            <input 
                                type="text" 
                                {...register("odds", { required: true })} 
                                placeholder="100" 
                            />
                            {errors.dollarAmount && <span>This field is required</span>}
                        </Box>
                    </Box>
                
                    <input type="submit" />
                </form>
            </Box>
        </Box>
    
    );
}