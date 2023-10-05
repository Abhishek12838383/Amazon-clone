import './App.css';
import Navbar from './navbar/Navbar'
import Header from './header/Header'
import Hero from './hero/Hero'
import Footer from './footer/Footer'
import Deals from './deals/Deals';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Header/>
     <Hero/>
     <Deals/> <br />
     <Deals/>
     <Footer/>
    </div>
  );
}

export default App;
