import React from 'react';
import '../utils/Coin.css';

const Coin = ({symbol,price,priceChangePercent})=>{

  return(
    <div className='coin-container'>
          <div className='coin-row'>
              <div className='coin'>
                <h2 className='coin-symbol'>{symbol}</h2>
              </div>
              <div className='coin-data'>
                <h2 className='coin-price'>${price}</h2>
                <h2 className='coin-price'>{priceChangePercent}%</h2>
              </div>
          </div>
    </div>
  );
};

export default Coin;