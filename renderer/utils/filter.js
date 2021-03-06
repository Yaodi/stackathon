//this utility function takes in scores data and user preferences, returning an array of games w/ each team and the respective categories for single game page

export default function(data, preferences) {
 let [lineScore] = data.resultSets.filter(el => el.name === 'LineScore');
 let [eastStandings] = data.resultSets.filter(
  el => el.name === 'EastConfStandingsByDay'
 );
 let [westStandings] = data.resultSets.filter(
  el => el.name === 'WestConfStandingsByDay'
 );

 let list = [];
 for (let i = 0; i < lineScore.rowSet.length; i++) {
  let game = {};
  for (let j = 0; j < lineScore.headers.length; j++) {
   let header = lineScore.headers[j];
   let field = lineScore.rowSet[i][j];
   if (preferences[header]) game[header] = field || 'n/a';
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
 let filtered = { games, eastStandings, westStandings };
 return filtered;
}
