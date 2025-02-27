// import React from "react";
import { exampleGameType } from "../assets/dummydata";
import { useForm, useWatch } from "react-hook-form";
import { Box, Typography } from "@mui/material";
import { Colors } from "../assets/Theme.ts";

type CreateAMoneylineFormProps = {
    games: exampleGameType[]
    gameToBet: number
}


export const CreateAMoneylineForm = (props: CreateAMoneylineFormProps) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();


    return(
        <Box>
            <form onSubmit={handleSubmit(handleSubmit)}>
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
                        {props.games.map((game) => (
                            <option key={`${game.id}`} value={game.id}>
                                {game.away} @ {game.home}
                            </option>
                        ))}
                    </select>
                </Box>
                <Box>
                    <select
                        {...register("side", {required:true})}
                        className="side"
                    >
                        {props.games.filter((game) =>
                            game.id == props.gameToBet
                        ).map((game) =>
                            <>
                                <option value={"away-side"}>Away: {game.away}</option>
                                <option value={"home-side"}>Home: {game.home}</option>
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
    )
}