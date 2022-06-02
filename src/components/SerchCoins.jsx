import {useState, useEffect} from 'react';
import Coin from './Coin';
import axios from 'axios';
import '../utils/Coin.css';

function SerchCoins() {
    const [coins, setCoins] = useState([]);

    useEffect(() => {
      const intervalId = setInterval(() => {
        axios.get(
          'https://api.binance.com/api/v3/ticker/price'
        )
        .then(res => {
          setCoins(res.data);
        })
        .catch(error => console.log(error));
      }, 1000)

      return () => clearInterval(intervalId);
    })

    const filteredCoinsUSDT = coins.filter(coin => coin.symbol.includes('USDT'));
    const filteredCoins100 = filteredCoinsUSDT.slice(0,100);

    return(
      <>
        <div>
          {filteredCoins100.map(coin => {
            return(
              <Coin
                key={coin.symbol}
                symbol={coin.symbol}
                price={parseFloat(coin.price).toFixed(3)}
              />
            );
          })}
        </div>
      </>
    );
  }
  
export default SerchCoins;