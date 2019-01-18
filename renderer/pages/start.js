/* eslint-disable react/jsx-key */
import Axios from 'axios';
import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import SingleGameBoxScore from './SingleGameBoxScore';
import filterAllGames from '../utils/filterAllGames';
import filterSingleGame from '../utils/filterSingleGame';

class root extends Component {
 constructor() {
  super();
  this.state = {
   dayOffSet: -1,
   date: new Date().toLocaleDateString(),
   preferences: {
    GAME_DATE_EST: false,
    GAME_SEQUENCE: false,
    GAME_ID: false,
    TEAM_ID: false,
    TEAM_ABBREVIATION: true,
    TEAM_CITY_NAME: false,
    TEAM_WINS_LOSSES: false,
    PTS_QTR1: false,
    PTS_QTR2: false,
    PTS_QTR3: false,
    PTS_QTR4: false,
    PTS_OT1: false,
    PTS_OT2: false,
    PTS_OT3: false,
    PTS_OT4: false,
    PTS_OT5: false,
    PTS_OT6: false,
    PTS_OT7: false,
    PTS_OT8: false,
    PTS_OT9: false,
    PTS_OT10: false,
    PTS: true,
    FG_PCT: false,
    FT_PCT: false,
    FG3_PCT: false,
    AST: false,
    REB: false,
    TOV: false,
   },
  };
 }

 async componentDidMount() {
  let { data } = await Axios.get('http://localhost:8001/scoreboard', {
   params: {
    GameDate: this.state.date,
    LeagueID: '00',
    DayOffset: this.state.dayOffSet,
   },
  });
  this.setState({ data });
 }
 async handleDayChange(e) {
  let change = parseInt(e.target.value, 10);
  let { data } = await Axios.get('http://localhost:8001/scoreboard', {
   params: {
    GameDate: this.state.date,
    LeagueID: '00',
    DayOffset: this.state.dayOffSet + change,
   },
  });
  this.setState({ data, dayOffSet: this.state.dayOffSet + change });
 }

 render() {
  //   console.log('day offset', this.state.dayOffSet);
  let games = [];
  if (this.state.data) {
   let data = this.state.data;
   let preferences = this.state.preferences;
   games = filterSingleGame(data, preferences);
  }
  return (
   <Fragment>
    <h1> scores </h1>
    <div>
     <button
      type="button"
      value="-1"
      onClick={() => this.handleDayChange(event)}
     >
      yesterday
     </button>
     <button
      type="button"
      value="1"
      onClick={() => this.handleDayChange(event)}
     >
      tomorrow
     </button>
    </div>
    <br />
    {games.map(game => {
     return (
      <Fragment>
       <div>
        {game.team1.TEAM_ABBREVIATION}: {game.team1.PTS || 'tbd'}
       </div>
       <div>
        {game.team2.TEAM_ABBREVIATION}:{game.team2.PTS || 'tbd'}
       </div>
       <br />
      </Fragment>
     );
    })}
   </Fragment>
  );
 }
}

export default root;
