import logo from './logo.svg';
import './App.css';

import Greeting from './components/Greeting';
import Comment from './components/Comment';
import Clock from './components/Clock';

function App() {

  // const commentProps = {
  //   author: {
  //     avatarUrl: "#",
  //     name: "Cabs"
  //   }, 
  //   text: "This is a comment"
  // }

  return (
    <div className="App">
      {/* <Greeting name="Cabs"/> */}
      {/* <Comment {...commentProps}/> */}
      <Clock/>
    </div>
  );
}

export default App;
