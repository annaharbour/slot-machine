import React, { useState, useEffect, useCallback } from 'react';

function Machine(props) {
  // Slots / Winner
  const symbols = ['🎃', '👻', '💀', '🦇', '🕷️','🧙‍♀️', '🧛', '🧟‍♂️','🍬','🤡','🔮','🪦'];
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [c, setC] = useState('');
  const [winner, setWinner] = useState(false);
  const [message, setMessage] = useState('Try your luck');
  const [buttonText, setButtonText] = useState('Start game');

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

  const checkWin = useCallback(() => {
    if (a === '' || b === '' || c === '') {
      setWinner(false);
      setMessage('Try your luck');
    } else if (a === b && b === c) {
      setWinner(true);
      setMessage('You won!');
      setButtonText('Play again?')
    } else {
      setWinner(false);
      setMessage(getRandomMessage());
      setButtonText('Try again?');
    }
  }, [a, b, c]);

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
        <div className='score'>
          {/* Score */}
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
