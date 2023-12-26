import './App.css';
import Header from './components/header';
import InfoBar from './components/infoBar';
import CalculatorContainer from './components/CalculatorContainer';
import Footer from './components/footer';

function App() {
 return (
 <>
 <Header/>
 <InfoBar title="Para você que é MEI, calcule o valor da sua hora de trabalho:"/>

 <InfoBar title='Calcule o valor a ser cobrado para um projeto:'/>

 <CalculatorContainer />

 <Footer/>
 </>
 );
}

export default App;
