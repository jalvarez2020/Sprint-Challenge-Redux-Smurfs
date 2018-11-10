import React, { Component } from 'react';
import './App.css';
import { getSmurfs } from '../actions/index';
import { connect } from 'react-redux';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {

  componentDidMount() {

    this.props.getSmurfs()
  }
  render() {
      console.log(this.props);
  
    return (
      <div className="App">
        {this.props.smurfs.map(smurf => {return (
        <div key={smurf.id}>
        {smurf.name}
        {smurf.age}
        {smurf.height}
        </div>)})}
      </div> //app wrap 
    );
  }
}

const mapStateToProps = (state) => {
  return {
      smurfs: state.smurfs,
  }
}

export default connect(mapStateToProps, {getSmurfs})(App);
