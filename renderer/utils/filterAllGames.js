//this utility function takes in scores data, returning an array of games w/ team abbreviation and final score for the all games page

export default function(data) {
 let [lineScore] = data.resultSets.filter(el => el.name === 'LineScore');
 let list = [];
 for (let i = 0; i < lineScore.rowSet.length; i++) {
  let game = {};
  for (let j = 0; j < lineScore.headers.length; j++) {
   let header = lineScore.headers[j];
   let field = lineScore.rowSet[i][j];
   if (header === 'TEAM_ABBREVIATION' || header === 'PTS') game[header] = field;
  }
  list.push(game);
 }
 let games = [];
 let game = {};
 for (let i = 0; i < list.length; i++) {
  if (i % 2) {
   game.team2 = list[i];
   games.push(game);
   game = {};
  } else {
   game.team1 = list[i];
  }
 }

 return games;
}
