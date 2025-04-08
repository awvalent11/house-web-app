import {useState} from "react"
import { exampleGameType } from "../assets/dummydata";
import { useForm, useWatch } from "react-hook-form";
import {Box, Select, Typography} from "@mui/material";
import {CreateAMoneylineForm} from "./CreateAMoneylineForm";
import MenuItem from "@mui/material/MenuItem";
import React from "react";




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

    const[games, setGames] = useState(props.games);
    const[betType, setBetType] = useState('spread');
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log("You're hitting me!");
        setBetType(data.betType);}
    const gameToBet = watch('gameToBet')
    const wagerGame = games.filter((game) => game.id === gameToBet);
    const handleChange = (event) => {
        setBetType(event.target.value)
    }
    const options = [
        { value: 'moneyline', label: 'Moneyline'},
        { value: 'over-under', label: 'Over Under'},
        { value: 'spread', label: 'Spread'}
    ]
    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    return (
        <Box
        marginY={'200px'}
        // sx = {{
        //     width: 400,
        //     height: 270,
        //     borderRadius: 5,
        //     display: 'flex',
        //     flexDirection: 'column',
        //     // bgcolor: '#007FFF',
        //     bgcolor: Colors.iceCold,
        //     borderColor: '#000000',
        //     border: '2px solid',
        //     alignContent: 'center',
        //     justifyContent: 'center',
        //     alignItems: 'center',
        // }}
        >
            <Box
                padding={'0px'}
                sx = {{
                    //
                    marginX: 0,
                    marginY: 0,
                    padding: 0
                    // width: 50,
                    // height: 70,
                    // borderRadius: 5,
                    // display: 'flex',
                    // // bgcolor: '#007FFF',
                    // bgcolor: Colors.brutalBlue,
                    // borderColor: '#000000',
                    // border: '5px solid',
                    // justifyContent: 'left',
                }}
            >
                <Select
                    value={betType}
                    onChange={handleChange}

                >
                    {options.map((option) => (
                        <MenuItem key={option.label} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </Select>
            </Box>
            {betType==='moneyline' && <CreateAMoneylineForm games={games} gameToBet={gameToBet} />}
            {/*<CreateASpreadForm games={games} gameToBet={gameToBet} />*/}
            {/*<CreateAOverUnderForm games={games} gameToBet={gameToBet} />*/}
            {betType==='spread' && <>Hey :) </>}
            {betType==='over-under' && <>Howdey :D </>}
        </Box>
    
    );
}