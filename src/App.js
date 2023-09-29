import './App.css';
import Footer from './parts/Footer';
import Navbar from './parts/Navbar';
import AppRouter from './router';

function App() {
  
  return (
    <div className="App font-sans">
      <Navbar/>
      <AppRouter/>
      <Footer/>
    </div>
  );
}

export default App;
