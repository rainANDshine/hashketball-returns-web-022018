import gamesData from './gamesData'

const defaultState = {
    teams: gamesData.teams,
    selectedPlayer: null
  }


function reducer(state=defaultState, action){
  console.log(action)
  switch(action.type){
    case "SHOW_PLAYER":
      return {...state, selectedPlayer: action.payload}
    default:
      return state
  }
}

export default reducer