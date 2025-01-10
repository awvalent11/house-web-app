import {useState} from "react"
import React from 'react';
import { exampleGameType } from "../assets/dummydata";
import { useForm } from "react-hook-form";
import { Box, Typography } from "@mui/material";
import { Colors } from "../assets/Theme.ts";

type CreateABEtFormProps = {
    games: exampleGameType[]
}


export const CreateABetForm = (props: CreateABEtFormProps) => {
    const nflTeams = ["PHI", "DEN", "LV", "GB", "CAR", "NO", "KC", "MIN",
        "DAL", "BUF", "CHI", "CIN", "LV", "SF", "ARI", "PIT", "LA Chargers",
        "TB", "NE", "IND", "WSH", "TEN", "JAX", "HOU", "NY Giants", "SEA",
        "NY Jets", "NYG", "DET", "MIA", "CLE", "NO", "LA Rams"]

    const[games, setGames] = useState(props.games);
    const [awayTeam, setAwayTeam] = useState();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => console.log(data);
    

    return (
        <Box
        marginY='100px'
        alignItems={'center'}
        sx = {{
            alignContent: 'center',
            width: 400,
            height: 270,
            borderRadius: 5,
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
                        value={awayTeam} 
                        // onChange={window.alert("You're hitting the Option select!")} 
                        className="form-select" 
                        >
                        <option value="" disabled>PHI</option>
                        {nflTeams.map((team) => (
                            <option key={team} value={team}>
                            {team}
                            </option>
                        ))}
                    </select>
                    <Typography>
                        @
                    </Typography>
                    <input 
                    type="dropdown" 
                    {...register("homeTeam", { required: true })} 
                    placeholder="PHI" 
                    />
                    {errors.homeTeam && <span>This field is required</span>}
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
                        value={awayTeam} 
                        className="form-select" 
                        >
                        <option value="" disabled>Odds</option>

                            <option key={"plus"} value={"plus"}>
                            +
                            </option>
                            <option key={"minus"} value={"plus"}>
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