export default function(data, preferences) {
 let [lineScore] = data.resultSets.filter(el => el.name === 'LineScore');
 let games = [];
 for (let i = 0; i < lineScore.rowSet.length; i++) {
  let game = {};
  for (let j = 0; j < lineScore.headers.length; j++) {
   let header = lineScore.headers[j];
   let field = lineScore.rowSet[i][j];
   console.log('util nested', header, field);
   if (preferences[header]) game[header] = field;
  }
  games.push(game);
 }

 return games;
}
