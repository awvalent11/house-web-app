import { Button } from "@mui/material"
import React from "react"
import { useForm } from "react-hook-form"


type SelectLeaugeButtonProps = {
    setLeagueType: React.Dispatch<React.SetStateAction<string>>
}

export const SelectLeaugeButton = (props: SelectLeaugeButtonProps) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (leagueType: String) => props.setLeagueType(leagueType)

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <select 
                {...register("leagueType", {required:true})}
                className="leagueType-button" 
            >
                <option value="" defaultValue={"NFL"}disabled>NFL</option>
                <option key={'MLB'} value={'moneyline'}>Moneyline</option>
                <option key={'spread'} value={'spread'}>Spread</option>
                <option key={'over-nder'} value={'over-under'}>OverUnder</option>
            </select>
        </form>
    )
        
}