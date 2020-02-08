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

const App = (props) => {

  const profiles = [
    {name: "Taro", age: 10},
    {name: "Hanako", age: 15},
    {name: "No age"}
  ];

  return (
    <div>
      {
      profiles.map((profile, index) => {
        return <User name={profile.name} age={profile.age} key={index} />
      })
    }
    </div>

  )
}

const User = (props) => {
  return <div>Hi, I am {props.name}!, and {props.age} years old</div>
}
User.defaultProps = {
  age: 1
}

export default App;
