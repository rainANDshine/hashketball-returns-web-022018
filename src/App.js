import React, { Component } from 'react';
import './App.css';
import gamesData from './gamesData'
import TeamList from './components/TeamList'
import PlayerDetails from './components/PlayerDetails'
import NavHeader from './components/Header'
import 'semantic-ui-css/semantic.min.css';
import { connect } from 'react-redux'


class App extends Component {
  // state = {
  //  teams: gamesData.teams,
  //  selectedPlayer: null
  // }

  // handleSelectPlayer = (player) => {
  //  this.setState({
  //    selectedPlayer: player
  //  })
  // }

  render() {
    // console.log(this.props)
    return (
      <div className="App">
        <NavHeader />
        <TeamList />
        {!this.props.selectedPlayer ? <div> Click Player for Details </div> :
          <PlayerDetails selectedPlayer={this.props.selectedPlayer}/>}
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    teams: state.teams,
    selectedPlayer: state.selectedPlayer
  }
}




export default connect(mapStateToProps)(App);

// function connect(callback1, callback2){

//  let stateProps = callback1(store.getState())

//  <Component {...this.props, ...stateProps}/>
// }
