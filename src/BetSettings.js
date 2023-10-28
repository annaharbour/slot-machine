import React from 'react';

// Component for adjusting coin value, betting lines, and maximum bet
// An active bet is required for each line that is bet on. If one line is played, a bet must be placed on each spin. If 5 lines are played, an active bet must also be selected five times. So, the higher the number of paylines you bet on, the higher the bet amount per spin will be. Each payline is an independent betting option, where you can freely decide on how many betting lines to bet on and how high the bet per line is.

// Paylines can consist of vertical, horizontal, diagonal or even zigzag and tetris combinations, depending on the slot. The more paylines are chosen, the more opportunities the player has to make a line and thus win.

function BetSettings(props) {
  const { coinValue, bettingLines, maxBet, setCoinValue, setBettingLines, setMaxBet } = props;

  const handleCoinValueChange = (event) => {
    setCoinValue(parseInt(event.target.value, 10));
  };

  const handleBettingLinesChange = (event) => {
    setBettingLines(parseInt(event.target.value, 10));
  };

  const handleMaxBetChange = (event) => {
    setMaxBet(parseInt(event.target.value, 10));
  };

  return (
    <div className="bet-settings">
      <label htmlFor='coinValue'>
        Coin Value:
        <input type="number" value={coinValue} onChange={handleCoinValueChange} />
      </label>
      <label htmlFor='bettingLines'>
        Betting Lines:
        <input type="number" value={bettingLines} onChange={handleBettingLinesChange} />
      </label>
      <label htmlFor='maxBet'>
        Maximum Bet:
        <input type="number" value={maxBet} onChange={handleMaxBetChange} />
      </label>
    </div>
  );
}

export default BetSettings;
