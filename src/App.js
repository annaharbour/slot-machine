import './App.css';
import Machine from './Machine';

function App() {
  const s1 = '🎃';
  const s2 = ' 👻 ';
  const s3 = ' 💀 ';

    return (
    <div className="App">
      <Machine s1={s1} s2={s2} s3={s3} /> 
    </div>
  );
}

export default App;
