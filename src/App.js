import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from "./components/Footer/Footer"
import Homepage from './pages/Homepage';
import { Timer } from './pages/Timer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Homepage/>
      <Footer/>
      <Timer/>
    </div>
  );
}

export default App;
