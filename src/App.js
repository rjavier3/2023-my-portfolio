import './App.css';
import Header from './components/Header.js'
import Banner from './components/sections/Banner'
import Works from './components/sections/Works'
import About from './components/sections/About'
import Contact from './components/sections/Contact'
import Footer from './components/Footer'


function App() {
  return (
    <div className="container">
      <Header/>
      <Banner/>
      <Works/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  );
}


export default App;