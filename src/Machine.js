import React, { useState, useEffect, useCallback } from 'react';

function Machine({username, userId, ...props}) {
  // Slots / Winner
  const symbols = ['🎃', '👻', '💀', '🦇', '🕷️','🧙‍♀️', '🧛', '🧟‍♂️','🍬','🤡','🔮','🪦'];
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [c, setC] = useState('');
  const [winner, setWinner] = useState(false);
  const [message, setMessage] = useState('Try your luck');
  const [buttonText, setButtonText] = useState('Start game');
  const [jackpot, setJackpot] = useState(1000)
  const [playerBalance, setPlayerBalance] = useState(100)

  useEffect(() => {
    fetch('https://spooky-slot-machine.onrender.com/jackpot')
      .then((response) => response.json())
      .then((data) => setJackpot(data.value))
      .catch((error) => console.error('Error fetching jackpot value:', error));

  }, [jackpot]); 
 

  function getRandomValue() {
    const randomIndex = Math.floor(Math.random() * symbols.length);
    return symbols[randomIndex];
  }

  function getRandomMessage(){
    const messages = [
      "The slot machine ghouls have claimed another victim.",
      "The mummies have wrapped up your winnings – try again!",
      "Your luck is as elusive as a shadow in the moonlight.",
      "The zombies have eaten your chances of winning.",
      "You've been tricked by the mischievous spirits of Halloween.",
      "The werewolves howl in delight as you lose another round.",
      "Beware of the slot machine's haunted graveyard – it's spookier than you thought.",
      "You've been entangled in the spider's web of losing spins.",
      "Your winning hopes have vanished into thin air like a ghost.",
      "Oops, your luck ran out like a black cat on Friday the 13th!",
      "No treats for you this time, only tricks!",
      "Your spins are as haunted as a ghostly graveyard.",
      "Looks like you've been cursed by the slot machine spirits.",
      "You've been out-spooked by the slot machine monsters.",
      "The witches have cast a losing spell on your spins.",
      "Your luck is as invisible as a phantom in the night.",
      "The bats have flown away with your winning hopes.",
      "Time to regroup and vanquish the losing demons!",
      "Better luck next spin – even Dracula had off days."
  ]
    return messages[Math.floor(Math.random() * messages.length)];
  }

  function resetGame() {
    setJackpot(1000);
    setPlayerBalance(100)
    setWinner(false);
    setMessage('You ran out of candy! Want me to stake you for another game?');
    setButtonText('Start game');
  }

  const checkWin = useCallback(() => {
    if (a === '' || b === '' || c === '') {
      setWinner(false);
      setMessage('Try your luck');
    } else if (a === b && b === c) {
      handleWin(10);
    } else if (a === b || b === c || a === c) {
      handleWin(10);
    } else {
      setWinner(false);
      setMessage(getRandomMessage());
      setButtonText('Try again?');
      updateJackpot(10);
      updateScore(-10);
      if (playerBalance -10 <= 0){
        resetGame()
      }
    }
  }, [a, b, c]);
  
  function handleWin(winnings) {
    setWinner(true);
    setMessage('You won!');
    setButtonText('Play again?');
    updateScore(winnings);
  }
  
  function updateJackpot(delta) {
    setJackpot((prevJackpot) => prevJackpot + delta);
  
    fetch('https://spooky-slot-machine.onrender.com/updatejackpot', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ delta }), 
    })
      .then((response) => {
        if (response.ok) {
          return response.json(); 
        } else {
          throw new Error('Failed to update jackpot on the backend');
        }
      })
      .then((data) => {
        setJackpot(data.value);
      })
      .catch((error) => console.error('Error updating jackpot on the backend:', error));
  }
    
    
  function updateScore(delta) {
    fetch('https://spooky-slot-machine.onrender.com/updateBalance', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId,
        delta,
      }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Failed to update player balance on the backend');
        }
      })
      .then((data) => {
        setPlayerBalance(data.balance);
  
        if (data.balance < 0) {
          resetGame();
        }
      })
      .catch((error) => {
        console.error('Error updating player balance:', error.message);
      });
  }
  
  
  

  useEffect(() => {
    checkWin();
  }, [checkWin]);

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
    <div>
      <div className="section">
        <p className='message'>{message}</p>
        <div className='jackpot'>
          Jackpot: {jackpot}
        </div>
        <div className='score'>
          There are {playerBalance} pieces of candy in your bucket!
        </div>
        
        <div className="slots">
          <div className="slot">{a}</div>
          <div className="slot">{b}</div>
          <div className="slot">{c}</div>
        </div>
        <button onClick={onClick}>{buttonText}</button>
      </div>
    </div>
  );
}

export default Machine;
