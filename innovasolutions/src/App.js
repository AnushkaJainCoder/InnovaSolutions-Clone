import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/navbar';
import { Header } from './Components/Header';
import { BodyOne } from './Components/BodyOne';
import { BodyTwo } from './Components/BodyTwo';
import { BodyThree } from './Components/BodyThree';
import { BodyFour } from './Components/BodyFour';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <BodyOne />
      <BodyTwo />
      <BodyThree />
      <BodyFour />
      
    </div>
  );
}

export default App;
