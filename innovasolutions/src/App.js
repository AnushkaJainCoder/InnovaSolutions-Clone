import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/navbar';
import { Header } from './Components/Header';
import { BodyOne } from './Components/BodyOne';
import { BodyTwo } from './Components/BodyTwo';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <BodyOne />
      <BodyTwo />
    </div>
  );
}

export default App;
