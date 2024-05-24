import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Translate from './pages/Translate/Translate';
import About from './pages/About/About';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/translate" element={<Translate />} />
        </Routes>
      <Footer/>
    </BrowserRouter> 
    </div>
  );
}

export default App;
