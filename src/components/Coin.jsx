import React from 'react';

const Coin = ({symbol,price})=>{

  return(
    <div className='coin-container'>
          <div className='coin-row'>
              <div className='coin'>
                <p className='coin-symbol'>{symbol}</p>
              </div>
              <div className='coin-data'>
                <p className='coin-price'>${price}</p>
              </div>
          </div>
    </div>
  );
};

export default Coin;