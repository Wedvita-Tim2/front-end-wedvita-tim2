import './App.css';
import Navbar from './parts/Navbar';
import AppRouter from './router';

function App() {
  
  return (
    <div className="App font-sans max-w-sm md:max-w-full">
      <Navbar/>
      <AppRouter/>
    </div>
  );
}

export default App;
