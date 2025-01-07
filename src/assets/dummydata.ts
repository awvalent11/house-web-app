import dayjs, {Dayjs} from "dayjs";


export type Profile = {
    email: string;
    balance: number;
    outstandingBets: Bet[]
    pastBets: PastBet[]
}

export type Bet = {
    id: number;
    home: string;
    away: string;
    odds: number;
    expiration: Dayjs;
    moneyLine?: number;
    payoff: number
    position: number
    status?: boolean //is this game going on or not?
}


export type PastBet = {

    id: number
    home: string
    away: string
    odds: number
    expiration: Dayjs
    moneyLine?: number
    position: number
    payoff: number
    paymentInfo: string[]
}


export const pastdummyData: PastBet[] = [
    {
        id: 1,
        home: "PHI",
        away: "WAS",
        odds: 800,
        expiration: dayjs('2023-10-01'),
        paymentInfo: ["Bank A", "Bank B", "2023-10-04UTZ03:00"],
        position: 50,
        payoff: 400
    }, {
        id: 2,
        home: "TB",
        away: "DET",
        moneyLine: -2.5,
        odds: -150,
        expiration: dayjs('2024-01-01'),
        paymentInfo: ["Bank A", "Bank B", "2024-01-04UTZ03:00"],
        position: 50,
        payoff: 75
    }]


export const outstandingDummyBets: Bet[] = [
    {
        id: 3,
        home: "NY",
        away: "WAS",
        odds: 600,
        expiration: dayjs('2024-10-01'),
        position: 100,
        payoff: 600
    }, {
        id: 4,
        home: "SFO",
        away: "CAR",
        moneyLine: -11.0,
        odds: +120,
        expiration: dayjs('2024-11-17'),
        position: 100,
        payoff: 120
    }]


export type exampleGameType = {
    id: number,
    home: string,
    away: string,
    startTime: Dayjs,
    odds: odd[],
    status: boolean,
}

export type odd = {
    pointsSpread: number
    overUnder: number
    homeMoneyLine: number
    awayMoneyLine: number
    sportsbookUrl: string
    sportsBook: string
}


export const dummyGames: exampleGameType[] = 
      [
        {
          "id": 18920,
          "home": "ARI",
          "away": "SF",
          "odds": [
            {
              "pointsSpread": -3.6,
              "overUnder": 33.8,
              "homeMoneyLine": -173,
              "awayMoneyLine": 143,
              "sportsbookUrl": "https://sportsbook.draftkings.com/event/30568859",
              "sportsBook": "Draftkings"
            },
            {
              "pointsSpread": -3.6,
              "overUnder": 33.8,
              "homeMoneyLine": -171,
              "awayMoneyLine": 143,
              "sportsbookUrl": "https://sportsbook.fanduel.com/football/nfl/san-francisco-49ers-@-arizona-cardinals-33896598",
              "sportsBook": "Fanduel"
            },
            {
              "pointsSpread": -3.6,
              "overUnder": 33.8,
              "homeMoneyLine": -175,
              "awayMoneyLine": 139,
              "sportsbookUrl": "https://pa.playsugarhouse.com/?l=RiversPhiladelphia&page=sportsbook#event/1020832334",
              "sportsBook": "Playsugarhouse"
            },
            {
              "pointsSpread": -3.6,
              "overUnder": 33.8,
              "homeMoneyLine": -175,
              "awayMoneyLine": 139,
              "sportsbookUrl": "https://nj.betrivers.com/?page=sportsbook#event/1020832334",
              "sportsBook": "Betrivers"
            },
            {
              "pointsSpread": -3.6,
              "overUnder": 33.8,
              "homeMoneyLine": -175,
              "awayMoneyLine": 139,
              "sportsbookUrl": "https://pa.parxcasino.com/kambiSportsbook.shtml#event/1020832334",
              "sportsBook": "Howdy :)"
            },
            {
              "pointsSpread": -3.6,
              "overUnder": 33.8,
              "homeMoneyLine": -175,
              "awayMoneyLine": 139,
              "sportsbookUrl": "https://pa.betrivers.com/?l=RiversPittsburgh&page=sportsbook#event/1020832334",
              "sportsBook": "Betrivers"
            },
            {
              "pointsSpread": -3.6,
              "overUnder": 33.8,
              "homeMoneyLine": -175,
              "awayMoneyLine": 143,
              "sportsbookUrl": "https://sportsbook.caesars.com/us/nj/bet/football/61a04afc-9958-4850-bae7-e1c5545a2728/ari-vs-sf",
              "sportsBook": "Caesars"
            },
            {
              "pointsSpread": -3.6,
              "overUnder": 33.8,
              "homeMoneyLine": -179,
              "awayMoneyLine": 147,
              "sportsbookUrl": "https://sports.betmgm.com/en/sports/events/16835189",
              "sportsBook": "Betmgm"
            }
          ],
          "startTime": dayjs("2025-01-05T16:25:00"),
          "status": false
        },
        {
          "id": 18921,
          "home": "ATL",
          "away": "CAR",
          "odds": [
            {
              "pointsSpread": -6,
              "overUnder": 38.6,
              "homeMoneyLine": -326,
              "awayMoneyLine": 254,
              "sportsbookUrl": "https://sportsbook.draftkings.com/event/30568830",
              "sportsBook": "Draftkings"
            },
            {
              "pointsSpread": -6,
              "overUnder": 38.6,
              "homeMoneyLine": -318,
              "awayMoneyLine": 250,
              "sportsbookUrl": "https://sportsbook.fanduel.com/football/nfl/carolina-panthers-@-atlanta-falcons-33891872",
              "sportsBook": "Fanduel"
            },
            {
              "pointsSpread": -6.4,
              "overUnder": 38.2,
              "homeMoneyLine": -334,
              "awayMoneyLine": 254,
              "sportsbookUrl": "https://pa.playsugarhouse.com/?l=RiversPhiladelphia&page=sportsbook#event/1020832333",
              "sportsBook": "Playsugarhouse"
            },
            {
              "pointsSpread": -6.4,
              "overUnder": 38.2,
              "homeMoneyLine": -334,
              "awayMoneyLine": 254,
              "sportsbookUrl": "https://nj.betrivers.com/?page=sportsbook#event/1020832333",
              "sportsBook": "Betrivers"
            },
            {
              "pointsSpread": -6.4,
              "overUnder": 38.2,
              "homeMoneyLine": -334,
              "awayMoneyLine": 254,
              "sportsbookUrl": "https://pa.parxcasino.com/kambiSportsbook.shtml#event/1020832333",
              "sportsBook": "Howdy :)"
            },
            {
              "pointsSpread": -6.4,
              "overUnder": 38.2,
              "homeMoneyLine": -334,
              "awayMoneyLine": 254,
              "sportsbookUrl": "https://pa.betrivers.com/?l=RiversPittsburgh&page=sportsbook#event/1020832333",
              "sportsBook": "Betrivers"
            },
            {
              "pointsSpread": -6.4,
              "overUnder": 38.2,
              "homeMoneyLine": -318,
              "awayMoneyLine": 246,
              "sportsbookUrl": "https://sportsbook.caesars.com/us/nj/bet/football/7bcf6309-88e7-4aa1-920f-e205c0e02348/atl-vs-car",
              "sportsBook": "Caesars"
            },
            {
              "pointsSpread": -6.8,
              "overUnder": 38.2,
              "homeMoneyLine": -358,
              "awayMoneyLine": 278,
              "sportsbookUrl": "https://sports.betmgm.com/en/sports/events/16835190",
              "sportsBook": "Betmgm"
            }
          ],
          "startTime": dayjs("2025-01-05T13:00:00"),
          "status": false
        },
        {
          "id": 18922,
          "home": "BAL",
          "away": "CLE",
          "odds": [
            {
              "pointsSpread": -15.5,
              "overUnder": 33,
              "homeMoneyLine": -1908,
              "awayMoneyLine": 954,
              "sportsbookUrl": "https://sportsbook.draftkings.com/event/30568884",
              "sportsBook": "Draftkings"
            },
            {
              "pointsSpread": -15.5,
              "overUnder": 33,
              "homeMoneyLine": -3180,
              "awayMoneyLine": 1192,
              "sportsbookUrl": "https://sportsbook.fanduel.com/football/nfl/cleveland-browns-@-baltimore-ravens-33891923",
              "sportsBook": "Fanduel"
            },
            {
              "pointsSpread": -15.9,
              "overUnder": 32.6,
              "homeMoneyLine": -1988,
              "awayMoneyLine": 835,
              "sportsbookUrl": "https://pa.playsugarhouse.com/?l=RiversPhiladelphia&page=sportsbook#event/1020832332",
              "sportsBook": "Playsugarhouse"
            },
            {
              "pointsSpread": -15.9,
              "overUnder": 32.6,
              "homeMoneyLine": -1988,
              "awayMoneyLine": 835,
              "sportsbookUrl": "https://nj.betrivers.com/?page=sportsbook#event/1020832332",
              "sportsBook": "Betrivers"
            },
            {
              "pointsSpread": -15.9,
              "overUnder": 32.6,
              "homeMoneyLine": -1988,
              "awayMoneyLine": 835,
              "sportsbookUrl": "https://pa.parxcasino.com/kambiSportsbook.shtml#event/1020832332",
              "sportsBook": "Howdy :)"
            },
            {
              "pointsSpread": -15.9,
              "overUnder": 32.6,
              "homeMoneyLine": -1988,
              "awayMoneyLine": 835,
              "sportsbookUrl": "https://pa.betrivers.com/?l=RiversPittsburgh&page=sportsbook#event/1020832332",
              "sportsBook": "Betrivers"
            },
            {
              "pointsSpread": -15.9,
              "overUnder": 32.6,
              "homeMoneyLine": -2782,
              "awayMoneyLine": 1073,
              "sportsbookUrl": "https://sportsbook.caesars.com/us/nj/bet/football/43d83f2d-76d4-4198-a3de-247b6a5b6290/bal-vs-cle",
              "sportsBook": "Caesars"
            },
            {
              "pointsSpread": -15.9,
              "overUnder": 32.6,
              "homeMoneyLine": -2385,
              "awayMoneyLine": 1034,
              "sportsbookUrl": "https://sports.betmgm.com/en/sports/events/16835191",
              "sportsBook": "Betmgm"
            }
          ],
          "startTime": dayjs("2025-01-04T16:30:00"),
          "status": false
        },
        {
          "id": 18923,
          "home": "DAL",
          "away": "WAS",
          "odds": [
            {
              "pointsSpread": 4.1,
              "overUnder": 34.6,
              "homeMoneyLine": 175,
              "awayMoneyLine": -215,
              "sportsbookUrl": "https://sportsbook.draftkings.com/event/30568713",
              "sportsBook": "Draftkings"
            },
            {
              "pointsSpread": 4.1,
              "overUnder": 35.4,
              "homeMoneyLine": 187,
              "awayMoneyLine": -231,
              "sportsbookUrl": "https://sportsbook.fanduel.com/football/nfl/washington-commanders-@-dallas-cowboys-33891885",
              "sportsBook": "Fanduel"
            },
            {
              "pointsSpread": 4.1,
              "overUnder": 35,
              "homeMoneyLine": 183,
              "awayMoneyLine": -227,
              "sportsbookUrl": "https://pa.playsugarhouse.com/?l=RiversPhiladelphia&page=sportsbook#event/1020832335",
              "sportsBook": "Playsugarhouse"
            },
            {
              "pointsSpread": 4.1,
              "overUnder": 35,
              "homeMoneyLine": 183,
              "awayMoneyLine": -227,
              "sportsbookUrl": "https://nj.betrivers.com/?page=sportsbook#event/1020832335",
              "sportsBook": "Betrivers"
            },
            {
              "pointsSpread": 4.1,
              "overUnder": 35,
              "homeMoneyLine": 183,
              "awayMoneyLine": -227,
              "sportsbookUrl": "https://pa.parxcasino.com/kambiSportsbook.shtml#event/1020832335",
              "sportsBook": "Howdy :)"
            },
            {
              "pointsSpread": 4.1,
              "overUnder": 35,
              "homeMoneyLine": 183,
              "awayMoneyLine": -227,
              "sportsbookUrl": "https://pa.betrivers.com/?l=RiversPittsburgh&page=sportsbook#event/1020832335",
              "sportsBook": "Betrivers"
            },
            {
              "pointsSpread": 4.1,
              "overUnder": 35,
              "homeMoneyLine": 181,
              "awayMoneyLine": -227,
              "sportsbookUrl": "https://sportsbook.caesars.com/us/nj/bet/football/8c06a035-e44e-41ee-b6a4-8f84067b9e4d/dal-vs-was",
              "sportsBook": "Caesars"
            },
            {
              "pointsSpread": 4.1,
              "overUnder": 35,
              "homeMoneyLine": 179,
              "awayMoneyLine": -219,
              "sportsbookUrl": "https://sports.betmgm.com/en/sports/events/16835192",
              "sportsBook": "Betmgm"
            }
          ],
          "startTime": dayjs("2025-01-05T13:00:00"),
          "status": false
        },
        {
          "id": 18924,
          "home": "DEN",
          "away": "KC",
          "odds": [
            {
              "pointsSpread": -8.3,
              "overUnder": 32.2,
              "homeMoneyLine": -477,
              "awayMoneyLine": 350,
              "sportsbookUrl": "https://sportsbook.draftkings.com/event/30568626",
              "sportsBook": "Draftkings"
            },
            {
              "pointsSpread": -8.3,
              "overUnder": 31.4,
              "homeMoneyLine": -445,
              "awayMoneyLine": 334,
              "sportsbookUrl": "https://sportsbook.fanduel.com/football/nfl/kansas-city-chiefs-@-denver-broncos-33891888",
              "sportsBook": "Fanduel"
            },
            {
              "pointsSpread": -8.3,
              "overUnder": 31.8,
              "homeMoneyLine": -469,
              "awayMoneyLine": 326,
              "sportsbookUrl": "https://pa.playsugarhouse.com/?l=RiversPhiladelphia&page=sportsbook#event/1020832348",
              "sportsBook": "Playsugarhouse"
            },
            {
              "pointsSpread": -8.3,
              "overUnder": 31.8,
              "homeMoneyLine": -469,
              "awayMoneyLine": 326,
              "sportsbookUrl": "https://nj.betrivers.com/?page=sportsbook#event/1020832348",
              "sportsBook": "Betrivers"
            },
            {
              "pointsSpread": -8.3,
              "overUnder": 31.8,
              "homeMoneyLine": -469,
              "awayMoneyLine": 326,
              "sportsbookUrl": "https://pa.parxcasino.com/kambiSportsbook.shtml#event/1020832348",
              "sportsBook": "Howdy :)"
            },
            {
              "pointsSpread": -8.3,
              "overUnder": 31.8,
              "homeMoneyLine": -469,
              "awayMoneyLine": 326,
              "sportsbookUrl": "https://pa.betrivers.com/?l=RiversPittsburgh&page=sportsbook#event/1020832348",
              "sportsBook": "Betrivers"
            },
            {
              "pointsSpread": -8.3,
              "overUnder": 31.8,
              "homeMoneyLine": -437,
              "awayMoneyLine": 318,
              "sportsbookUrl": "https://sportsbook.caesars.com/us/nj/bet/football/2ddeed58-54cf-4b67-afd8-a618dec1c45e/den-vs-kc",
              "sportsBook": "Caesars"
            },
            {
              "pointsSpread": -8.3,
              "overUnder": 31.8,
              "homeMoneyLine": -437,
              "awayMoneyLine": 318,
              "sportsbookUrl": "https://sports.betmgm.com/en/sports/events/16835193",
              "sportsBook": "Betmgm"
            }
          ],
          "startTime": dayjs("2025-01-05T16:25:00"),
          "status": false
        },
        {
          "id": 18925,
          "home": "DET",
          "away": "MIN",
          "odds": [
            {
              "pointsSpread": -2,
              "overUnder": 44.9,
              "homeMoneyLine": -118,
              "awayMoneyLine": 99,
              "sportsbookUrl": "https://sportsbook.draftkings.com/event/30568625",
              "sportsBook": "Draftkings"
            },
            {
              "pointsSpread": -2,
              "overUnder": 44.9,
              "homeMoneyLine": -122,
              "awayMoneyLine": 103,
              "sportsbookUrl": "https://sportsbook.fanduel.com/football/nfl/minnesota-vikings-@-detroit-lions-33891889",
              "sportsBook": "Fanduel"
            },
            {
              "pointsSpread": -2,
              "overUnder": 44.5,
              "homeMoneyLine": -121,
              "awayMoneyLine": 99,
              "sportsbookUrl": "https://pa.playsugarhouse.com/?l=RiversPhiladelphia&page=sportsbook#event/1020832346",
              "sportsBook": "Playsugarhouse"
            },
            {
              "pointsSpread": -2,
              "overUnder": 44.5,
              "homeMoneyLine": -121,
              "awayMoneyLine": 99,
              "sportsbookUrl": "https://nj.betrivers.com/?page=sportsbook#event/1020832346",
              "sportsBook": "Betrivers"
            },
            {
              "pointsSpread": -2,
              "overUnder": 44.5,
              "homeMoneyLine": -121,
              "awayMoneyLine": 99,
              "sportsbookUrl": "https://pa.parxcasino.com/kambiSportsbook.shtml#event/1020832346",
              "sportsBook": "Howdy :)"
            },
            {
              "pointsSpread": -2,
              "overUnder": 44.5,
              "homeMoneyLine": -121,
              "awayMoneyLine": 99,
              "sportsbookUrl": "https://pa.betrivers.com/?l=RiversPittsburgh&page=sportsbook#event/1020832346",
              "sportsBook": "Betrivers"
            },
            {
              "pointsSpread": -2.4,
              "overUnder": 44.5,
              "homeMoneyLine": -123,
              "awayMoneyLine": 103,
              "sportsbookUrl": "https://sportsbook.caesars.com/us/nj/bet/football/2408614f-6a89-4390-b27a-74ad3826ea95/det-vs-min",
              "sportsBook": "Caesars"
            },
            {
              "pointsSpread": -2.4,
              "overUnder": 44.5,
              "homeMoneyLine": -123,
              "awayMoneyLine": 103,
              "sportsbookUrl": "https://sports.betmgm.com/en/sports/events/16835194",
              "sportsBook": "Betmgm"
            }
          ],
          "startTime": dayjs("2025-01-05T20:20:00"),
          "status": false
        },
        {
          "id": 18926,
          "home": "GB",
          "away": "CHI",
          "odds": [
            {
              "pointsSpread": -8,
              "overUnder": 33,
              "homeMoneyLine": -362,
              "awayMoneyLine": 278,
              "sportsbookUrl": "https://sportsbook.draftkings.com/event/30568674",
              "sportsBook": "Draftkings"
            },
            {
              "pointsSpread": -8.3,
              "overUnder": 33,
              "homeMoneyLine": -469,
              "awayMoneyLine": 350,
              "sportsbookUrl": "https://sportsbook.fanduel.com/football/nfl/chicago-bears-@-green-bay-packers-33891895",
              "sportsBook": "Fanduel"
            },
            {
              "pointsSpread": -8,
              "overUnder": 32.6,
              "homeMoneyLine": -382,
              "awayMoneyLine": 278,
              "sportsbookUrl": "https://pa.playsugarhouse.com/?l=RiversPhiladelphia&page=sportsbook#event/1020832341",
              "sportsBook": "Playsugarhouse"
            },
            {
              "pointsSpread": -8,
              "overUnder": 32.6,
              "homeMoneyLine": -382,
              "awayMoneyLine": 278,
              "sportsbookUrl": "https://nj.betrivers.com/?page=sportsbook#event/1020832341",
              "sportsBook": "Betrivers"
            },
            {
              "pointsSpread": -8,
              "overUnder": 32.6,
              "homeMoneyLine": -382,
              "awayMoneyLine": 278,
              "sportsbookUrl": "https://pa.parxcasino.com/kambiSportsbook.shtml#event/1020832341",
              "sportsBook": "Howdy :)"
            },
            {
              "pointsSpread": -8,
              "overUnder": 32.6,
              "homeMoneyLine": -382,
              "awayMoneyLine": 278,
              "sportsbookUrl": "https://pa.betrivers.com/?l=RiversPittsburgh&page=sportsbook#event/1020832341",
              "sportsBook": "Betrivers"
            },
            {
              "pointsSpread": -8,
              "overUnder": 32.6,
              "homeMoneyLine": -382,
              "awayMoneyLine": 286,
              "sportsbookUrl": "https://sportsbook.caesars.com/us/nj/bet/football/7f09702f-28a6-46a2-852b-8af4ee2325ef/gb-vs-chi",
              "sportsBook": "Caesars"
            },
            {
              "pointsSpread": -8,
              "overUnder": 32.6,
              "homeMoneyLine": -398,
              "awayMoneyLine": 298,
              "sportsbookUrl": "https://sports.betmgm.com/en/sports/events/16835195",
              "sportsBook": "Betmgm"
            }
          ],
          "startTime": dayjs("2025-01-05T13:00:00"),
          "status": false
        },
        {
          "id": 18927,
          "home": "IND",
          "away": "JAX",
          "odds": [
            {
              "pointsSpread": -3.6,
              "overUnder": 34.6,
              "homeMoneyLine": -163,
              "awayMoneyLine": 135,
              "sportsbookUrl": "https://sportsbook.draftkings.com/event/30568727",
              "sportsBook": "Draftkings"
            },
            {
              "pointsSpread": -3.6,
              "overUnder": 34.6,
              "homeMoneyLine": -183,
              "awayMoneyLine": 151,
              "sportsbookUrl": "https://sportsbook.fanduel.com/football/nfl/jacksonville-jaguars-@-indianapolis-colts-33891899",
              "sportsBook": "Fanduel"
            },
            {
              "pointsSpread": -3.6,
              "overUnder": 35,
              "homeMoneyLine": -183,
              "awayMoneyLine": 147,
              "sportsbookUrl": "https://pa.playsugarhouse.com/?l=RiversPhiladelphia&page=sportsbook#event/1020832339",
              "sportsBook": "Playsugarhouse"
            },
            {
              "pointsSpread": -3.6,
              "overUnder": 35,
              "homeMoneyLine": -183,
              "awayMoneyLine": 147,
              "sportsbookUrl": "https://nj.betrivers.com/?page=sportsbook#event/1020832339",
              "sportsBook": "Betrivers"
            },
            {
              "pointsSpread": -3.6,
              "overUnder": 35,
              "homeMoneyLine": -183,
              "awayMoneyLine": 147,
              "sportsbookUrl": "https://pa.parxcasino.com/kambiSportsbook.shtml#event/1020832339",
              "sportsBook": "Howdy :)"
            },
            {
              "pointsSpread": -3.6,
              "overUnder": 35,
              "homeMoneyLine": -183,
              "awayMoneyLine": 147,
              "sportsbookUrl": "https://pa.betrivers.com/?l=RiversPittsburgh&page=sportsbook#event/1020832339",
              "sportsBook": "Betrivers"
            },
            {
              "pointsSpread": -3.6,
              "overUnder": 35,
              "homeMoneyLine": -175,
              "awayMoneyLine": 143,
              "sportsbookUrl": "https://sportsbook.caesars.com/us/nj/bet/football/3af10fef-c204-4768-a0a4-763d14f6c82f/ind-vs-jax",
              "sportsBook": "Caesars"
            },
            {
              "pointsSpread": -4,
              "overUnder": 35,
              "homeMoneyLine": -179,
              "awayMoneyLine": 147,
              "sportsbookUrl": "https://sports.betmgm.com/en/sports/events/16835196",
              "sportsBook": "Betmgm"
            }
          ],
          "startTime": dayjs("2025-01-05T13:00:00"),
          "status": false
        },
        {
          "id": 18928,
          "home": "LAR",
          "away": "SEA",
          "odds": [
            {
              "pointsSpread": 4.1,
              "overUnder": 30.6,
              "homeMoneyLine": 167,
              "awayMoneyLine": -205,
              "sportsbookUrl": "https://sportsbook.draftkings.com/event/30568883",
              "sportsBook": "Draftkings"
            },
            {
              "pointsSpread": 4.1,
              "overUnder": 30.6,
              "homeMoneyLine": 175,
              "awayMoneyLine": -215,
              "sportsbookUrl": "https://sportsbook.fanduel.com/football/nfl/seattle-seahawks-@-los-angeles-rams-33891901",
              "sportsBook": "Fanduel"
            },
            {
              "pointsSpread": 4.1,
              "overUnder": 30.6,
              "homeMoneyLine": 171,
              "awayMoneyLine": -219,
              "sportsbookUrl": "https://pa.playsugarhouse.com/?l=RiversPhiladelphia&page=sportsbook#event/1020832337",
              "sportsBook": "Playsugarhouse"
            },
            {
              "pointsSpread": 4.1,
              "overUnder": 30.6,
              "homeMoneyLine": 171,
              "awayMoneyLine": -219,
              "sportsbookUrl": "https://nj.betrivers.com/?page=sportsbook#event/1020832337",
              "sportsBook": "Betrivers"
            },
            {
              "pointsSpread": 4.1,
              "overUnder": 30.6,
              "homeMoneyLine": 171,
              "awayMoneyLine": -219,
              "sportsbookUrl": "https://pa.parxcasino.com/kambiSportsbook.shtml#event/1020832337",
              "sportsBook": "Howdy :)"
            },
            {
              "pointsSpread": 4.1,
              "overUnder": 30.6,
              "homeMoneyLine": 171,
              "awayMoneyLine": -219,
              "sportsbookUrl": "https://pa.betrivers.com/?l=RiversPittsburgh&page=sportsbook#event/1020832337",
              "sportsBook": "Betrivers"
            },
            {
              "pointsSpread": 4.1,
              "overUnder": 30.6,
              "homeMoneyLine": 181,
              "awayMoneyLine": -227,
              "sportsbookUrl": "https://sportsbook.caesars.com/us/nj/bet/football/e3410b36-9941-40ed-a3d6-6103d9f29a87/lar-vs-sea",
              "sportsBook": "Caesars"
            },
            {
              "pointsSpread": 4.1,
              "overUnder": 31,
              "homeMoneyLine": 179,
              "awayMoneyLine": -219,
              "sportsbookUrl": "https://sports.betmgm.com/en/sports/events/16835198",
              "sportsBook": "Betmgm"
            }
          ],
          "startTime": dayjs("2025-01-05T16:25:00"),
          "status": false
        },
        {
          "id": 18930,
          "home": "LV",
          "away": "LAC",
          "odds": [
            {
              "pointsSpread": 2.8,
              "overUnder": 33,
              "homeMoneyLine": 127,
              "awayMoneyLine": -153,
              "sportsbookUrl": "https://sportsbook.draftkings.com/event/30568644",
              "sportsBook": "Draftkings"
            },
            {
              "pointsSpread": 2.8,
              "overUnder": 32.2,
              "homeMoneyLine": 140,
              "awayMoneyLine": -167,
              "sportsbookUrl": "https://sportsbook.fanduel.com/football/nfl/los-angeles-chargers-@-las-vegas-raiders-33891900",
              "sportsBook": "Fanduel"
            },
            {
              "pointsSpread": 2.8,
              "overUnder": 33,
              "homeMoneyLine": 143,
              "awayMoneyLine": -179,
              "sportsbookUrl": "https://pa.playsugarhouse.com/?l=RiversPhiladelphia&page=sportsbook#event/1020832352",
              "sportsBook": "Playsugarhouse"
            },
            {
              "pointsSpread": 2.8,
              "overUnder": 33,
              "homeMoneyLine": 143,
              "awayMoneyLine": -179,
              "sportsbookUrl": "https://nj.betrivers.com/?page=sportsbook#event/1020832352",
              "sportsBook": "Betrivers"
            },
            {
              "pointsSpread": 2.8,
              "overUnder": 33,
              "homeMoneyLine": 143,
              "awayMoneyLine": -179,
              "sportsbookUrl": "https://pa.parxcasino.com/kambiSportsbook.shtml#event/1020832352",
              "sportsBook": "Howdy :)"
            },
            {
              "pointsSpread": 2.8,
              "overUnder": 33,
              "homeMoneyLine": 143,
              "awayMoneyLine": -179,
              "sportsbookUrl": "https://pa.betrivers.com/?l=RiversPittsburgh&page=sportsbook#event/1020832352",
              "sportsBook": "Betrivers"
            },
            {
              "pointsSpread": 2.8,
              "overUnder": 33,
              "homeMoneyLine": 119,
              "awayMoneyLine": -159,
              "sportsbookUrl": "https://sportsbook.caesars.com/us/nj/bet/football/856563a5-f7bc-46c0-aedd-7def619fbae2/lv-vs-lac",
              "sportsBook": "Caesars"
            },
            {
              "pointsSpread": 2.8,
              "overUnder": 33,
              "homeMoneyLine": 143,
              "awayMoneyLine": -179,
              "sportsbookUrl": "https://sports.betmgm.com/en/sports/events/16835197",
              "sportsBook": "Betmgm"
            }
          ],
          "startTime": dayjs("2025-01-05T16:25:00"),
          "status": false
        },
        {
          "id": 18931,
          "home": "NE",
          "away": "BUF",
          "odds": [
            {
              "pointsSpread": 1.6,
              "overUnder": 29,
              "homeMoneyLine": 91,
              "awayMoneyLine": -107,
              "sportsbookUrl": "https://sportsbook.draftkings.com/event/30568648",
              "sportsBook": "Draftkings"
            },
            {
              "pointsSpread": 1.6,
              "overUnder": 29,
              "homeMoneyLine": 95,
              "awayMoneyLine": -113,
              "sportsbookUrl": "https://sportsbook.fanduel.com/football/nfl/buffalo-bills-@-new-england-patriots-33891903",
              "sportsBook": "Fanduel"
            },
            {
              "pointsSpread": 1.3,
              "overUnder": 29,
              "homeMoneyLine": 92,
              "awayMoneyLine": -111,
              "sportsbookUrl": "https://pa.playsugarhouse.com/?l=RiversPhiladelphia&page=sportsbook#event/1020832350",
              "sportsBook": "Playsugarhouse"
            },
            {
              "pointsSpread": 1.3,
              "overUnder": 29,
              "homeMoneyLine": 92,
              "awayMoneyLine": -111,
              "sportsbookUrl": "https://nj.betrivers.com/?page=sportsbook#event/1020832350",
              "sportsBook": "Betrivers"
            },
            {
              "pointsSpread": 1.3,
              "overUnder": 29,
              "homeMoneyLine": 92,
              "awayMoneyLine": -111,
              "sportsbookUrl": "https://pa.parxcasino.com/kambiSportsbook.shtml#event/1020832350",
              "sportsBook": "Howdy :)"
            },
            {
              "pointsSpread": 1.3,
              "overUnder": 29,
              "homeMoneyLine": 92,
              "awayMoneyLine": -111,
              "sportsbookUrl": "https://pa.betrivers.com/?l=RiversPittsburgh&page=sportsbook#event/1020832350",
              "sportsBook": "Betrivers"
            },
            {
              "pointsSpread": 1.6,
              "overUnder": 29,
              "homeMoneyLine": 94,
              "awayMoneyLine": -111,
              "sportsbookUrl": "https://sportsbook.caesars.com/us/nj/bet/football/a728c716-bd69-4d9c-bf5d-91350ff6bb2c/ne-vs-buf",
              "sportsBook": "Caesars"
            },
            {
              "pointsSpread": 1.6,
              "overUnder": 29,
              "homeMoneyLine": 91,
              "awayMoneyLine": -111,
              "sportsbookUrl": "https://sports.betmgm.com/en/sports/events/16835199",
              "sportsBook": "Betmgm"
            }
          ],
          "startTime": dayjs("2025-01-05T13:00:00"),
          "status": false
        },
        {
          "id": 18932,
          "home": "NYJ",
          "away": "MIA",
          "odds": [
            {
              "pointsSpread": 0.3,
              "overUnder": 30.6,
              "homeMoneyLine": -81,
              "awayMoneyLine": -94,
              "sportsbookUrl": "https://sportsbook.draftkings.com/event/30568762",
              "sportsBook": "Draftkings"
            },
            {
              "pointsSpread": -1.2,
              "overUnder": 30.6,
              "homeMoneyLine": -89,
              "awayMoneyLine": -83,
              "sportsbookUrl": "https://sportsbook.fanduel.com/football/nfl/miami-dolphins-@-new-york-jets-33891909",
              "sportsBook": "Fanduel"
            },
            {
              "pointsSpread": 0.6,
              "overUnder": 31,
              "homeMoneyLine": -83,
              "awayMoneyLine": -93,
              "sportsbookUrl": "https://pa.playsugarhouse.com/?l=RiversPhiladelphia&page=sportsbook#event/1020832340",
              "sportsBook": "Playsugarhouse"
            },
            {
              "pointsSpread": 0.6,
              "overUnder": 31,
              "homeMoneyLine": -83,
              "awayMoneyLine": -93,
              "sportsbookUrl": "https://nj.betrivers.com/?page=sportsbook#event/1020832340",
              "sportsBook": "Betrivers"
            },
            {
              "pointsSpread": 0.6,
              "overUnder": 31,
              "homeMoneyLine": -83,
              "awayMoneyLine": -93,
              "sportsbookUrl": "https://pa.parxcasino.com/kambiSportsbook.shtml#event/1020832340",
              "sportsBook": "Howdy :)"
            },
            {
              "pointsSpread": 0.6,
              "overUnder": 31,
              "homeMoneyLine": -83,
              "awayMoneyLine": -93,
              "sportsbookUrl": "https://pa.betrivers.com/?l=RiversPittsburgh&page=sportsbook#event/1020832340",
              "sportsBook": "Betrivers"
            },
            {
              "pointsSpread": 0.6,
              "overUnder": 31,
              "homeMoneyLine": -83,
              "awayMoneyLine": -91,
              "sportsbookUrl": "https://sportsbook.caesars.com/us/nj/bet/football/9a0264fd-a7a4-4fe7-91e2-70009acfe20e/nyj-vs-mia",
              "sportsBook": "Caesars"
            },
            {
              "pointsSpread": 0.6,
              "overUnder": 31,
              "homeMoneyLine": -83,
              "awayMoneyLine": -91,
              "sportsbookUrl": "https://sports.betmgm.com/en/sports/events/16835200",
              "sportsBook": "Betmgm"
            }
          ],
          "startTime": dayjs("2025-01-05T16:25:00"),
          "status": false
        },
        {
          "id": 18933,
          "home": "PHI",
          "away": "NYG",
          "odds": [
            {
              "pointsSpread": -2,
              "overUnder": 29.8,
              "homeMoneyLine": -103,
              "awayMoneyLine": 87,
              "sportsbookUrl": "https://sportsbook.draftkings.com/event/30568744",
              "sportsBook": "Draftkings"
            },
            {
              "pointsSpread": -2,
              "overUnder": 29.8,
              "homeMoneyLine": -113,
              "awayMoneyLine": 95,
              "sportsbookUrl": "https://sportsbook.fanduel.com/football/nfl/new-york-giants-@-philadelphia-eagles-33891912",
              "sportsBook": "Fanduel"
            },
            {
              "pointsSpread": -2,
              "overUnder": 29.8,
              "homeMoneyLine": -121,
              "awayMoneyLine": 99,
              "sportsbookUrl": "https://pa.playsugarhouse.com/?l=RiversPhiladelphia&page=sportsbook#event/1020832338",
              "sportsBook": "Playsugarhouse"
            },
            {
              "pointsSpread": -2,
              "overUnder": 29.8,
              "homeMoneyLine": -121,
              "awayMoneyLine": 99,
              "sportsbookUrl": "https://nj.betrivers.com/?page=sportsbook#event/1020832338",
              "sportsBook": "Betrivers"
            },
            {
              "pointsSpread": -2,
              "overUnder": 29.8,
              "homeMoneyLine": -121,
              "awayMoneyLine": 99,
              "sportsbookUrl": "https://pa.parxcasino.com/kambiSportsbook.shtml#event/1020832338",
              "sportsBook": "Howdy :)"
            },
            {
              "pointsSpread": -2,
              "overUnder": 29.8,
              "homeMoneyLine": -121,
              "awayMoneyLine": 99,
              "sportsbookUrl": "https://pa.betrivers.com/?l=RiversPittsburgh&page=sportsbook#event/1020832338",
              "sportsBook": "Betrivers"
            },
            {
              "pointsSpread": -2,
              "overUnder": 29.8,
              "homeMoneyLine": -111,
              "awayMoneyLine": 94,
              "sportsbookUrl": "https://sportsbook.caesars.com/us/nj/bet/football/a6c1ffe5-0829-4094-85ff-0e4628fef7bd/phi-vs-nyg",
              "sportsBook": "Caesars"
            },
            {
              "pointsSpread": -2,
              "overUnder": 29.8,
              "homeMoneyLine": -115,
              "awayMoneyLine": 95,
              "sportsbookUrl": "https://sports.betmgm.com/en/sports/events/16835201",
              "sportsBook": "Betmgm"
            }
          ],
          "startTime": dayjs("2025-01-05T13:00:00"),
          "status": false
        },
        {
          "id": 18934,
          "home": "PIT",
          "away": "CIN",
          "odds": [
            {
              "pointsSpread": 1.6,
              "overUnder": 37.8,
              "homeMoneyLine": 91,
              "awayMoneyLine": -107,
              "sportsbookUrl": "https://sportsbook.draftkings.com/event/30568612",
              "sportsBook": "Draftkings"
            },
            {
              "pointsSpread": 1.6,
              "overUnder": 38.6,
              "homeMoneyLine": 89,
              "awayMoneyLine": -105,
              "sportsbookUrl": "https://sportsbook.fanduel.com/football/nfl/cincinnati-bengals-@-pittsburgh-steelers-33891920",
              "sportsBook": "Fanduel"
            },
            {
              "pointsSpread": 1.3,
              "overUnder": 38.2,
              "homeMoneyLine": 83,
              "awayMoneyLine": -103,
              "sportsbookUrl": "https://pa.playsugarhouse.com/?l=RiversPhiladelphia&page=sportsbook#event/1020832336",
              "sportsBook": "Playsugarhouse"
            },
            {
              "pointsSpread": 1.3,
              "overUnder": 38.2,
              "homeMoneyLine": 83,
              "awayMoneyLine": -103,
              "sportsbookUrl": "https://nj.betrivers.com/?page=sportsbook#event/1020832336",
              "sportsBook": "Betrivers"
            },
            {
              "pointsSpread": 1.3,
              "overUnder": 38.2,
              "homeMoneyLine": 83,
              "awayMoneyLine": -103,
              "sportsbookUrl": "https://pa.parxcasino.com/kambiSportsbook.shtml#event/1020832336",
              "sportsBook": "Howdy :)"
            },
            {
              "pointsSpread": 1.3,
              "overUnder": 38.2,
              "homeMoneyLine": 83,
              "awayMoneyLine": -103,
              "sportsbookUrl": "https://pa.betrivers.com/?l=RiversPittsburgh&page=sportsbook#event/1020832336",
              "sportsBook": "Betrivers"
            },
            {
              "pointsSpread": 1.3,
              "overUnder": 38.2,
              "homeMoneyLine": 94,
              "awayMoneyLine": -111,
              "sportsbookUrl": "https://sportsbook.caesars.com/us/nj/bet/football/77daf89f-d2d8-42ee-935b-cdec5132835b/pit-vs-cin",
              "sportsBook": "Caesars"
            },
            {
              "pointsSpread": 1.6,
              "overUnder": 38.2,
              "homeMoneyLine": 91,
              "awayMoneyLine": -111,
              "sportsbookUrl": "https://sports.betmgm.com/en/sports/events/16835202",
              "sportsBook": "Betmgm"
            }
          ],
          "startTime": dayjs("2025-01-04T20:00:00"),
          "status": false
        },
        {
          "id": 18935,
          "home": "TB",
          "away": "NO",
          "odds": [
            {
              "pointsSpread": -11.1,
              "overUnder": 34.6,
              "homeMoneyLine": -716,
              "awayMoneyLine": 477,
              "sportsbookUrl": "https://sportsbook.draftkings.com/event/30568800",
              "sportsBook": "Draftkings"
            },
            {
              "pointsSpread": -11.5,
              "overUnder": 34.6,
              "homeMoneyLine": -755,
              "awayMoneyLine": 509,
              "sportsbookUrl": "https://sportsbook.fanduel.com/football/nfl/new-orleans-saints-@-tampa-bay-buccaneers-33891921",
              "sportsBook": "Fanduel"
            },
            {
              "pointsSpread": -11.1,
              "overUnder": 34.6,
              "homeMoneyLine": -723,
              "awayMoneyLine": 457,
              "sportsbookUrl": "https://pa.playsugarhouse.com/?l=RiversPhiladelphia&page=sportsbook#event/1020832351",
              "sportsBook": "Playsugarhouse"
            },
            {
              "pointsSpread": -11.1,
              "overUnder": 34.6,
              "homeMoneyLine": -723,
              "awayMoneyLine": 457,
              "sportsbookUrl": "https://nj.betrivers.com/?page=sportsbook#event/1020832351",
              "sportsBook": "Betrivers"
            },
            {
              "pointsSpread": -11.1,
              "overUnder": 34.6,
              "homeMoneyLine": -723,
              "awayMoneyLine": 457,
              "sportsbookUrl": "https://pa.parxcasino.com/kambiSportsbook.shtml#event/1020832351",
              "sportsBook": "Howdy :)"
            },
            {
              "pointsSpread": -11.1,
              "overUnder": 34.6,
              "homeMoneyLine": -723,
              "awayMoneyLine": 457,
              "sportsbookUrl": "https://pa.betrivers.com/?l=RiversPittsburgh&page=sportsbook#event/1020832351",
              "sportsBook": "Betrivers"
            },
            {
              "pointsSpread": -11.1,
              "overUnder": 34.6,
              "homeMoneyLine": -874,
              "awayMoneyLine": 556,
              "sportsbookUrl": "https://sportsbook.caesars.com/us/nj/bet/football/eaf8c097-4b03-4889-be84-2c7765de25f6/tb-vs-no",
              "sportsBook": "Caesars"
            },
            {
              "pointsSpread": -11.1,
              "overUnder": 34.6,
              "homeMoneyLine": -716,
              "awayMoneyLine": 477,
              "sportsbookUrl": "https://sports.betmgm.com/en/sports/events/16835203",
              "sportsBook": "Betmgm"
            }
          ],
          "startTime": dayjs("2025-01-05T13:00:00"),
          "status": false
        },
        {
          "id": 18936,
          "home": "TEN",
          "away": "HOU",
          "odds": [
            {
              "pointsSpread": -1.2,
              "overUnder": 29,
              "homeMoneyLine": -99,
              "awayMoneyLine": 83,
              "sportsbookUrl": "https://sportsbook.draftkings.com/event/30568697",
              "sportsBook": "Draftkings"
            },
            {
              "pointsSpread": -1.2,
              "overUnder": 29,
              "homeMoneyLine": -97,
              "awayMoneyLine": 83,
              "sportsbookUrl": "https://sportsbook.fanduel.com/football/nfl/houston-texans-@-tennessee-titans-33891897",
              "sportsBook": "Fanduel"
            },
            {
              "pointsSpread": -1.2,
              "overUnder": 29.4,
              "homeMoneyLine": -99,
              "awayMoneyLine": 81,
              "sportsbookUrl": "https://pa.playsugarhouse.com/?l=RiversPhiladelphia&page=sportsbook#event/1020832349",
              "sportsBook": "Playsugarhouse"
            },
            {
              "pointsSpread": -1.2,
              "overUnder": 29.4,
              "homeMoneyLine": -99,
              "awayMoneyLine": 81,
              "sportsbookUrl": "https://nj.betrivers.com/?page=sportsbook#event/1020832349",
              "sportsBook": "Betrivers"
            },
            {
              "pointsSpread": -1.2,
              "overUnder": 29.4,
              "homeMoneyLine": -99,
              "awayMoneyLine": 81,
              "sportsbookUrl": "https://pa.parxcasino.com/kambiSportsbook.shtml#event/1020832349",
              "sportsBook": "Howdy :)"
            },
            {
              "pointsSpread": -1.2,
              "overUnder": 29.4,
              "homeMoneyLine": -99,
              "awayMoneyLine": 81,
              "sportsbookUrl": "https://pa.betrivers.com/?l=RiversPittsburgh&page=sportsbook#event/1020832349",
              "sportsBook": "Betrivers"
            },
            {
              "pointsSpread": -1.2,
              "overUnder": 29.4,
              "homeMoneyLine": -99,
              "awayMoneyLine": 83,
              "sportsbookUrl": "https://sportsbook.caesars.com/us/nj/bet/football/05011cb5-29db-486f-b60a-5be66fca74ef/ten-vs-hou",
              "sportsBook": "Caesars"
            },
            {
              "pointsSpread": -1.2,
              "overUnder": 29.4,
              "homeMoneyLine": -95,
              "awayMoneyLine": 80,
              "sportsbookUrl": "https://sports.betmgm.com/en/sports/events/16835204",
              "sportsBook": "Betmgm"
            }
          ],
          "startTime": dayjs("2025-01-05T13:00:00"),
          "status": false
        }
      ]