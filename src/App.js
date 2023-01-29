import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Rotas from './components/Rotas/Rotas';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Rotas />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
