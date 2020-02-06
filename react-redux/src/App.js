import React, {  } from 'react';

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
    <div>
      <Cat />
      <Cat />
      <Cat />
      <Cat />
    </div>

  )
}

const Cat = () => {
  return <h4>ミャミャ</h4>
}

export default App;
