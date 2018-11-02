import React, { Component } from 'react';
import { connect } from 'react-redux';
import Bitfinex from './Bitfinex/Index';
//import logo from './logo.svg';
import './App.css';


const mapStateToProps = state => ({
  appName: state.appName
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-brand" href="#">{this.props.appName}</button>
          </nav>
        </header>
        <Bitfinex />
      </div>
    );
  }
}

export default connect(mapStateToProps, () => ({}) )(App);
