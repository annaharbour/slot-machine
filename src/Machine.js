import React, {useState} from 'react'

function Machine(props) {
    const {s1, s2, s3} = props;
    const [a, setA] = useState('');
    const [b, setB] = useState('');
    const [c, setC] = useState('');
    const [winner, setWinner] = useState(false);

    function getRandomValue(){
        const randomIndex = Math.floor(Math.random() * 3)
        return [s1, s2, s3][randomIndex];
    }

    function onClick(){
        setA(getRandomValue());
        setB(getRandomValue());
        setC(getRandomValue());

        const interval = setInterval(() => {
            setA(getRandomValue());
            setB(getRandomValue());
            setC(getRandomValue());
          }, 100);
        
          setTimeout(() => {
            clearInterval(interval);
            if (a === b && b === c) {
              setWinner(true);
            } else {
              setWinner(false);
            }
          }, 3000); 
    }
    
    return (
    <div className='slot-machine'>
        <h1>Slot Machine</h1>
        <p>Find out how lucky you are!</p>
        <p>{winner ?  'You win!' : 'You Lose!'}</p>
        <div className='slots'>
            <div className='slot'>{a}</div>
            <div className='slot'>{b}</div>
            <div className='slot'>{c}</div>
            </div>
        <button onClick={onClick}>{winner ? 'Play again' : 'Try again'}</button>
    </div>
  )
}

export default Machine