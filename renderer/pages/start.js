import Axios from 'axios';
import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';

class root extends Component {
 constructor() {
  super();
  this.state = { dayOffSet: 0 };
  this.grabScores = this.grabScores.bind(this);
 }

 async componentDidMount() {
  let { data } = await Axios.get('http://localhost:8001/scoreboard', {
   params: { GameDate: '01/16/2019', LeagueID: '00', DayOffset: '0' },
  });
  this.setState({ data });
 }
 grabScores() {
  if (this.state.data) {
   let [lineScore] = this.state.data.resultSets.filter(
    thing => thing.name === 'LineScore'
   );
   console.log('count', lineScore);
   return lineScore.rowSet.map((game, idx) => {
    return (
     <h1>
      {!(idx % 2) && idx !== 0 ? <h1>break</h1> : null}
      {game.map(el => (
       <span>{el} </span>
      ))}
     </h1>
    );
   });
  }
 }

 render() {
  //   if (this.state.data) {
  //    let [lineScore] = this.state.data.resultSets.filter(
  //     thing => thing.name === 'LineScore'
  //    );
  //    console.log('linescore', this.state.data);
  //   }
  return (
   <Fragment>
    <h1>Today's scores</h1>
    {this.grabScores()}
   </Fragment>
  );
 }
}

export default root;
