export const PLAYERS: any = [
    {
        id: 1,
        name: "Giannis Antetokounmpo",
        iconUrl: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203507.png',
        team: "Milwaukee Bucks",
        points: 20000,
        allStar: 7
    },
    {
        id: 2,
        name: "Luka Doncic",
        iconUrl: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629029.png',
        team: "Dallas Mavericks",
        points: 10000,
        allStar: 3
    },

    {
        id: 3,
        name: 'Nikola Jokic',
        iconUrl: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203999.png',
        team: "Denver Nuggets",
        points: 15000,
        allStar: 5
    },

    {
        id: 4,
        name: "Kyrie Irving",
        iconUrl: 'https://cdn.nba.com/headshots/nba/latest/1040x760/202681.png',
        team: "Dallas Mavericks",
        points: 25000,
        allStar: 10
    }
];

export function findPlayerById(playerId:number) {
    return PLAYERS.find((player: { id: number; }) => player.id === playerId);
}