import React, { Component } from 'react';
import { connect } from 'react-redux';
import Bitfinex from './Bitfinex/Index';
//import logo from './logo.svg';
import './App.css';
import getData from '../utils/server';
import store from '../store';



const mapDispatchToProps = dispatch => ({
  onClick: (payload) =>
    dispatch({ type: 'SERVER_TOGGLE' })
});


const mapStateToProps = state => ({
  appName: state.appName,
  connected: state.connected
});


class App extends Component {

  constructor(props) {
    super(props);
    this.handleBtnClick = this.handleBtnClick.bind(this);
  }


  handleBtnClick() {
    //console.log('closing connection');
    //this.setState({ connected: !this.state.connected });
    if (this.props.connected) {
      store.dispatch({ type: 'SERVER_TOGGLE' });
    } else {
      store.dispatch({ type: 'SERVER_TOGGLE' });
      this.setState(this.state);
      window.location.reload(); 
    }
  }

  render() {
    return (
      <div className="App">
        <header className="header">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <h3 className="navbar-brand" href="#">{this.props.appName}</h3>

            <button className="pull-right btn btn-sm btn-primary" onClick={this.handleBtnClick}>{ this.props.connected ? "Disconnect" : "Connect" }</button>
          </nav>
        </header>
        <Bitfinex />
      </div>
    );
  }
}

export default connect(mapStateToProps, () => ({}) )(App);
