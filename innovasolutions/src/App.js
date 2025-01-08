import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/navbar';
import { Header } from './Components/Header';
import { BodyOne } from './Components/BodyOne';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <BodyOne />
    </div>
  );
}

export default App;
