class MLBTeam {
    private team: string;
    odds: number[];
    constructor(team: string, odds: number[]) {
        this.team = team;
        this.odds = odds;
    }
}

export default MLBTeam;