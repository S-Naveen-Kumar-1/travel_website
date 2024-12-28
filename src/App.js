import logo from './logo.svg';
import './App.css';
import { AllRoutes } from './Pages/AllRoutes';
import Navbar from './components/Navbar';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="App">
      <Navbar />
      <WhatsAppButton/>
      <AllRoutes />

    </div>
  );
}

export default App;
