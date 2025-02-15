import './App.css';
import HeaderComp from './components/Header';
import Navbar from './components/Nav';
import MainComp from './components/Main';
import FooterComp from './components/Footer';

function App() {
  return(
    <>
      <HeaderComp />
      <Navbar />
      <MainComp />
      <FooterComp />
    </>
  );
}

export default App;
