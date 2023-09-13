import './App.css';
import Button from './elements/Buttons';

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline text-blue-300">
        Hello world!
      </h1>
        <Button isLarge type={"link"} href={'tes'}>
            Large
        </Button>
        <Button isPrimary type={"link"} href={''}>
            Primary
        </Button>
        <Button isSmall>
            Small
        </Button>
    </div>
  );
}

export default App;
