import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from "./components/Footer/Footer"
import Homepage from './pages/Homepage';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Homepage/>
      <Footer/>
    </div>
  );
}

export default App;
