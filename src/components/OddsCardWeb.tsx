import React from "react";
import { exampleGameType } from "../assets/dummydata";
import { Box } from '@mui/material';

type OddsCardProps = {
    game: exampleGameType
}

type OddsProp = {
    odds: Number[]
}

{/* <Stack direction="row" spacing={2}>
  <Item>Item 1</Item>
  <Item>Item 2</Item>
  <Item>Item 3</Item>
</Stack> */}

const toggleOddsFormat = () => {
    // switch(oddsFormat) {
    //     case "pointsSpread":
    //         setOddsFormat("overUnder")
    //         break;
    //     case "overUnder":
    //         setOddsFormat("homeMoneyLine")
    //         break;
    //     case "homeMoneyLine":
    //         setOddsFormat("awayMoneyLine")
    //         break;
    //     default:
    //     setOddsFormat("pointsSpread")
    window.alert("Hey ;)")
    }

export const OddsCardWeb = (props: OddsCardProps) => {

    return(
        <Box sx= {{
            display: 'flex'
        }} >
            <h4>
                I Display Odds
            </h4>
            <h4>
                {props.game.away} @ {props.game.home}
            </h4>
                    {/* <Box sx= {{
                        space='sm'
                        width='100%'
                        justifyContent='space-between'
                        alignItems='flex-start'
                    }}
                    >
                        <h3>
                            {props.game.away} @ {props.game.home}
                        </h3>
                        <Stack direction={"row"}
                            space='sm'
                            alignItems='center'
                            alignContent='center'
                        >
                            <div
                                onClick={() => {
                                    toggleOddsFormat()
                                }
                            }
                            >
                                <h3>
                                    {displayOddsFormat()}
                                </h3>
                                <h5>
                                    Toggle
                                </h5>
                            </div>
                        </Stack>
                    </Box>
                    {props.game.startTime && (
                        <Stack direction={"row"} space='md' alignItems='center'>
                            {/*<Clock8 size='20' color={Colors.zinc600} />*/}
                            {/* <h3
                                flexShrink={1}
                                fontFamily='Army-Regular'
                                fontSize={14}
                                lineHeight={18}
                                color={Colors.zinc800}
                            >
                                Game Day: {props.game.startTime.format("LLLL")}
                            </h3>
                        </Stack>
                    )}
                        <Box direction={"row"} justifyContent='space-between'>
                                <Box direction={"row"}
                                    gap={14}
                                    alignItems='flex-start'
                                    padding={'$px'}
                                >
                                    {props.game.odds.map( odd => {
                                        return(
                                    <OddsDisplay odd={odd} oddsFormat={oddsFormat}/>
                                        )}
                                    )}
                                </Box>
                        </Box> */} 
        </Box>
    )

}