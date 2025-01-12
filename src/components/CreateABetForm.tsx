import {useState} from "react"
import React from 'react';
import { exampleGameType } from "../assets/dummydata";
import { useForm } from "react-hook-form";
import { Box, Typography } from "@mui/material";
import { Colors } from "../assets/Theme.ts";

type CreateABetFormProps = {
    games: exampleGameType[]
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
    const [awayTeam, setAwayTeam] = useState();
    const { register, handleSubmit, formState: { errors } } = useForm();
    // const onSubmit = (data: SubmitGameType) => console.log(data);
    const onSubmit = (data) => console.log(data)
    

    return (
        <Box
        marginY='200px'
        
        sx = {{
            alignContent: 'center',
            width: 400,
            height: 270,
            borderRadius: 5,
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            // bgcolor: '#007FFF',
            bgcolor: Colors.iceCold,
            borderColor: '#000000',
            border: '2px solid',
        }}
        >
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box
                    display={'flex'}
                    flexDirection={'row'}
                >
                  
                    <select 
                        {...register("away-team", {required:true})}
                        className="away-select" 
                        >
                        <option value="" disabled>Away</option>
                        {nflTeams.map((team) => (
                            <option key={`away ${team}`} value={team}>
                            {team}
                            </option>
                        ))}
                    </select>
                    <Typography>
                        @
                    </Typography>
                    <select 
                        {...register("home-team", {required:true})}
                        className="home-select" 
                        >
                        <option value="" defaultValue={"Home"} disabled>Home</option>
                        {nflTeams.map((team) => (
                            <option key={`home ${team}`} value={team}>
                            {team}
                            </option>
                        ))}
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
    
    );
}