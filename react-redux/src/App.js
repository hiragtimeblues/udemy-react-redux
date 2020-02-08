import React, {  } from 'react';
import PropTypes from 'prop-types';

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

  const profiles = [
    {name: "Taro", age: 10},
    {name: "Hanako", age: 15},
    {name: "no age", age: 3}
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

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}

export default App;
