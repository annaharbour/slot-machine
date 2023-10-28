import './App.css';
import ControlBar from './ControlBar';
import Machine from './Machine';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SignUp } from './SignUp';
import { SignIn } from './SignIn';
import { Home } from './Home';

function App() {
  
  const symbols = ['🎃', '👻', '💀', '🦇', '🕷️','🧙‍♀️', '🧛', '🧟‍♂️','🍬','🤡','🔮','🪦'];

    return (
    <div className="App">
      {/* <ControlBar/> */}
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path='/slot-machine' element={<Machine symbols={symbols}/>}></Route>
          <Route exact path='/signin' element={<SignIn />}></Route>
          <Route exact path='/signup' element={<SignUp />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
