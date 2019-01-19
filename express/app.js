const express = require('express');
const Axios = require('axios');
const app = express();
const cors = require('cors');

app.use(cors());
let PORT = 8001;
// app.use(function(req, res, next) {
//  res.header('Access-Control-Allow-Origin', '*');
//  res.header(
//   'Access-Control-Allow-Headers',
//   'Origin, X-Requested-With, Content-Type, Accept'
//  );
//  next();
// });

// app.set('views', __dirname + '/client/views');
// app.use(express.static(__dirname + '/client/dist/static'));
app.get('/scoreboard', async (req, res, next) => {
 console.log('query', req.query);
 let { data } = await Axios.get('https://stats.nba.com/stats/scoreboard/', {
  params: req.query,
 });
 console.log('got data back');
 res.json(data);
});
app.get('/', (req, res) => res.send('Hello World!'));

// app.use((req, res, next) => {
//  const err = new Error('Error from Express!');
//  err.status = 404;
//  console.log(err);
// });

app.listen(PORT, () => console.log(`express is set up on ${PORT}!`));
