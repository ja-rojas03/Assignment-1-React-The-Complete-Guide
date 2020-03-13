import React , { Component } from 'react';
import './App.css';
import UserInput from './Inputs/UserInput'
import UserOutput from './Outputs/UserOutput'


class App extends Component {

  state = {
    username: "iAwesome"
  }

  nameChangerHandler = (event) => {
    this.setState({
      username : event.target.value
    })
  }

  render(){
    return (
      <div className="App">
        <UserOutput username={this.state.username}/>
        <UserOutput username={this.state.username}/>
        <UserOutput username={this.state.username} /> 
        <UserInput changed={this.nameChangerHandler} username={this.state.username}/>
      </div>
    );
  }
 
}

export default App;
