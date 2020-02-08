import React, { Component } from 'react';

// function App() {
//   return (
//     <div className="App"><h1>Hello, world</h1></div>
//   );
// }

// class App extends Component{
//   render(){
//     return <h1>Hello, world</h1>;
//   }
// }

const App = () => {
  return (
    <Counter></Counter>
  )
}

class Counter extends Component {
  constructor(props){
    super(props)
    this.state = {count: 0}
  }

  handlePlus = () => {
    // const current = this.state.count
    this.setState({ count: this.state.count + 1 })
  }

  handleMinus = () => {
    this.setState({ count: this.state.count - 1 })
  }

  render(){
    return (
      <React.Fragment>
        <div>counter: {this.state.count}</div>
        <button onClick={this.handlePlus}>+1</button>
        <button onClick={this.handleMinus}>-1</button>
      </React.Fragment>
    )
  }
}




export default App;
