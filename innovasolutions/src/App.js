import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/navbar';
import { Header } from './Components/Header';
import { Vision } from './Components/Vision';
import { BodyTwo } from './Components/OpenPositions';
import { MVP } from './Components/MVP';
import { Offerings } from './Components/Offerings';
import { Services } from './Components/Services';
import CaseStudies from './Components/CaseStudies';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Vision />
      <BodyTwo />
      <MVP />
      <Offerings />
      <Services />
      <CaseStudies />
      
    </div>
  );
}

export default App;
