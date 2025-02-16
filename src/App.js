import './App.css';
import HeaderComp from './components/Header';
import MainComp from './components/Main';
import FooterComp from './components/Footer';

function App() {
  return(
    <div className='grid-container'>
      <HeaderComp />
      <MainComp />
      <FooterComp />
    </div>
  );
}

export default App;
