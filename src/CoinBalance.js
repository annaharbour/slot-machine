// Component for displaying and managing the user's coin balance
import React, { useState, Component } from 'react';

function CoinBalance() {
   const [balance, setBalance] = useState('')

    // when user wins a spin, increment balance by amount awarded
    function increaseBalance(){
        const newBalance = balance++;
        setBalance(... balance, newBalance)
    }
    

    return (
        <div>
            Balance: {balance}
        </div>
    );

}

export default CoinBalance;