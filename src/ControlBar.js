import React, { Component } from 'react';
import CoinBalance from './CoinBalance';
import BetSettings from './BetSettings';
import PayoutTable from './PayoutTable'

class ControlBar extends Component {
    constructor(props){
        super(props);
        this.increaseBalance = this.increaseBalance.bind(this);
        this.checkWin = this.checkWin.bind(this);
    }
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default ControlBar;