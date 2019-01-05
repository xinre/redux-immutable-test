import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux";
import {immutableFun} from './action';

class App extends Component {
  render() {
    console.log(this.props.storeData);
    return (
      <div className="App">
        <header className="App-header">
          <p onClick={() => {
            this.props.dispatch(immutableFun())
          }}>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    storeData:store.get('rootReducer').get('initData')
  }
}
export default connect(mapStateToProps)(App);
