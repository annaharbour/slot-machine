// import React, {useState, useEffect} from 'react'

// function Machine(props) {
//     const {s1, s2, s3} = props;
//     const [a, setA] = useState(s1);
//     const [b, setB] = useState(s2);
//     const [c, setC] = useState(s3);
//     const [winner, setWinner] = useState(false);
//     const [message, setMessage] = useState('Test your luck... if you dare.');
//     const [buttonText, setButtonText] = useState('Start Game');

//     function getRandomMessage(){
//         const messages = [`Don't hate the coder, hate the game`, `You're great at losing`, `13 years of bad luck`];
//         return messages[Math.floor(Math.random() * messages.length)];
//     }

//     function getRandomValue(){
//         const randomIndex = Math.floor(Math.random() * 3)
//         return [s1, s2, s3][randomIndex];
//     }

//     function onClick(){
//         setA(getRandomValue());
//         setB(getRandomValue());
//         setC(getRandomValue());

//         const interval = setInterval(() => {
//             setA(getRandomValue());
//             setB(getRandomValue());
//             setC(getRandomValue());
//           }, 100);
        
//           setTimeout(() => {
//             clearInterval(interval);
//             if (a === b && b === c) {
//                 setWinner(true);
//                 setButtonText('Play again');
//               } else {
//                 setWinner(false);
//                 setButtonText('Try again');
//                 setMessage(getRandomMessage());
//               }  
//           }, 3000);
          
          
//     }
      
//     return (
//     <div className='slot-machine'>
//         <h1>Slot Machine</h1>
//         <p>{winner ?  'You win!' : message}</p>
//         <div className='slots'>
//             <div className='slot'>{a}</div>
//             <div className='slot'>{b}</div>
//             <div className='slot'>{c}</div>
//             </div>
//         <button onClick={onClick}>{buttonText}</button>
//     </div>
//   )
// }

// export default Machine

import React, { useState, useEffect } from 'react';

function Machine(props) {
  const { s1, s2, s3 } = props;
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [c, setC] = useState('');
  const [winner, setWinner] = useState(false);


  function getRandomValue() {
    const randomIndex = Math.floor(Math.random() * 3);
    return [s1, s2, s3][randomIndex];
  }

  function checkWin() {
    if (a === b && b === c) {
      setWinner(true);
    } else {
      setWinner(false);
    }
  }
  useEffect(() => {
    checkWin();
  }, [a, b, c]);

  function onClick() {
    setA('');
    setB('');
    setC('');
    setWinner(false);

    setA(getRandomValue());
    setB(getRandomValue());
    setC(getRandomValue());

  }

  return (
    <div className="slot-machine">
      <h1>Slot Machine</h1>
      <p>{winner ? 'You win!' : 'You lose'}</p>
      <div className="slots">
        <div className="slot">{a}</div>
        <div className="slot">{b}</div>
        <div className="slot">{c}</div>
      </div>
      <button onClick={onClick}>{winner ? 'Play again' : 'Try your luck'}</button>
    </div>
  );
}

export default Machine;
