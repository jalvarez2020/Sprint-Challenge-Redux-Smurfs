import axios from 'axios';

/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const LOADING = 'LOADING';
export const SUCCESS = 'SUCCESS';
export const NEWSMURF = 'NEWSMURF';
export const ERROR = 'ERROR';

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

export const getSmurfs = () => {
  return (dispatch) => {
    dispatch({type: LOADING})
    axios.get(`http://localhost:3333/smurfs`)
    .then( response => {
        dispatch({type: SUCCESS, payload: response.data, fetching: false})
    })
    .catch (err => {
      dispatch({type: ERROR, errorMessage: "Can not find smurfs"})
    })
  }
}

export const addSmurf = (newSmurf) => {
  return (dispatch) => {
    axios.post(`http://localhost:3333/smurfs`, newSmurf)
    .then( response => {
      dispatch({type: NEWSMURF, payload: response.data, fetching: false })
    })
    .catch (err => {
      dispatch({type: ERROR, errorMessage: "Can not find smurfs"})
    })
  }
}