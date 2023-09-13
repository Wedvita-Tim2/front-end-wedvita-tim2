import './App.css';
import Button from './elements/Buttons';
import { InputText } from './elements/Forms';

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline text-blue-300">
        Hello world!
      </h1>
      <InputText element = { 'input' } label = { 'Username' }/>
    </div>
  );
}

export default App;
