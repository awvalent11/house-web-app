import {useState} from "react"
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

// onBlur validation for whether a game exists and is in range of payment service

export const CreateABetForm = (props: CreateABetFormProps) => {
    const nflTeams = ["PHI", "DEN", "GB", "CAR", "NO", "KC", "MIN",
        "DAL", "BUF", "CHI", "CIN", "LV", "SF", "ARI", "PIT", "LA Chargers",
        "TB", "NE", "IND", "WSH", "TEN", "JAX", "HOU", "NY Giants", "SEA",
        "NY Jets", "NYG", "DET", "MIA", "CLE", "LA Rams", "ATL"]

    const[games, setGames] = useState(props.games);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    // const onSubmit = (data: SubmitGameType) => console.log(data);
    const onSubmit = (data) => console.log(data)
    console.log(games)
    const gameToBet = watch('gameToBet')
    console.log(gameToBet)
    const wagerGame = games.filter((game) => game.id === gameToBet);
    console.log(wagerGame)

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
                                <option key={'over-nder'} value={'over-under'}>OverUnder</option>
                    </select>
                    <Box
                        display={'flex'}
                        flexDirection={'row'}
                    >
                    
                        <select 
                            {...register("gameToBet", {required:true})}
                            className="gameToBet" 
                            >
                            {games.map((game) => (
                                <option key={`${game.id}`} value={game.id}>
                                {game.away} @ {game.home}
                                </option>
                            ))}
{/*                         
                        <Typography>
                            @
                        </Typography>
                        
                            {...register("home-team", {required:true})}
                            className="home-select" 
                            >
                            <option value="" defaultValue={"Home"} disabled>Home</option>
                            {nflTeams.map((team) => (
                                <option key={`home ${team}`} value={team}>
                                {team}
                                </option>
                            ))} */}
                        </select>
                    </Box>
                    <Box>
                        <select 
                            {...register("side", {required:true})}
                            className="side" 
                        >
                            
                        {games.filter((game) => 
                            game.id == gameToBet
                        ).map((game) => 
                            <>
                                <option value={"side"}>Away: {game.away}</option>
                                <option value={"side"}>Home: {game.home}</option>
                            </>
                        )}
                            
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