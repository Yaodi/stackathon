/* eslint-disable react/jsx-key */
import Axios from 'axios';
import React, { Component, Fragment } from 'react';
import filterSingleGame from '../utils/filterSingleGame';

class root extends Component {
 constructor() {
  super();
  let staticDate = new Date();
  staticDate = staticDate.toLocaleDateString();
  let header = new Date();
  header.setDate(header.getDate() - 1);
  this.state = {
   dayOffSet: -1,
   staticDate,
   dateHeader: header.toLocaleDateString(),
   preferences: {
    GAME_DATE_EST: false,
    GAME_SEQUENCE: false,
    GAME_ID: false,
    TEAM_ID: false,
    TEAM_ABBREVIATION: true,
    TEAM_CITY_NAME: false,
    TEAM_WINS_LOSSES: false,
    PTS_QTR1: true,
    PTS_QTR2: true,
    PTS_QTR3: true,
    PTS_QTR4: true,
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
    FG_PCT: true,
    FT_PCT: false,
    FG3_PCT: false,
    AST: false,
    REB: false,
    TOV: false,
   },
   show: false,
  };
 }

 async componentDidMount() {
  let { data } = await Axios.get('http://localhost:8001/scoreboard', {
   params: {
    GameDate: this.state.staticDate,
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
    GameDate: this.state.staticDate,
    LeagueID: '00',
    DayOffset: this.state.dayOffSet + change,
   },
  });
  let day = new Date();
  day.setDate(day.getDate() + this.state.dayOffSet + change);
  this.setState({
   data,
   dayOffSet: this.state.dayOffSet + change,
   dateHeader: day.toLocaleDateString(),
  });
 }

 render() {
  let games = [];
  let eastStandings = {};
  let westStandings = {};
  if (this.state.data) {
   let data = this.state.data;
   let preferences = this.state.preferences;
   let filtered = filterSingleGame(data, preferences);
   games = filtered.games;
   eastStandings = filtered.eastStandings;
   westStandings = filtered.westStandings;
  }
  console.log('e', eastStandings, 'w', westStandings);
  return (
   <Fragment>
    <h1> {this.state.dateHeader} </h1>
    <div>
     <button
      type="button"
      value="-1"
      onClick={() => this.handleDayChange(event)}
     >
      prev
     </button>
     <button
      type="button"
      value="1"
      onClick={() => this.handleDayChange(event)}
     >
      next
     </button>
     {this.state.show ? (
      <Fragment>
       <button type="button" onClick={() => this.setState({ show: false })}>
        collapse
       </button>
       {Object.keys(this.state.preferences).map(pref => {
        if (pref !== 'TEAM_ABBREVIATION') {
         return (
          <div>
           <input
            type="radio"
            checked={this.state.preferences[pref]}
            onClick={() => {
             this.setState({
              ...this.state,
              preferences: {
               ...this.state.preferences,
               [pref]: !this.state.preferences[pref],
              },
             });
            }}
           />{' '}
           {pref}
          </div>
         );
        }
       })}
      </Fragment>
     ) : (
      <button type="button" onClick={() => this.setState({ show: true })}>
       preferences
      </button>
     )}
    </div>
    <br />
    <table cellSpacing="15">
     <td>
      <h1>Scores</h1>

      {games.map(game => {
       return (
        <div>
         {game.team1.TEAM_ABBREVIATION} vs. {game.team2.TEAM_ABBREVIATION}
         {Object.keys(game.team1).map(header => {
          if (header !== 'TEAM_ABBREVIATION') {
           return (
            <div>
             {header}: {game.team1[header]} {game.team2[header]}
            </div>
           );
          }
         })}
         <br />
        </div>
       );
      })}
     </td>
     <td>
      <h1>East Standings</h1>

      {eastStandings.rowSet &&
       eastStandings.rowSet.map(game => (
        <h4>
         {game[5]} {'('}
         {game[7]} - {game[8]}
         {')'}
        </h4>
       ))}
     </td>
     <td>
      <h1>West Standings</h1>
      {westStandings.rowSet &&
       westStandings.rowSet.map(game => (
        <h4>
         {game[5]} {'('}
         {game[7]} - {game[8]}
         {')'}
        </h4>
       ))}
     </td>
    </table>
   </Fragment>
  );
 }
}

export default root;
