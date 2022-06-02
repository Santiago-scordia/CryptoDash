import {useState, useEffect} from 'react';
import Coin from './Coin';
import axios from 'axios';
import '../utils/Coin.css';

function SerchCoins() {
    const [coins, setCoins] = useState([]);
    const wantedCoins = ['BTCUSDT','ETHUSDT', 'BUSDUSDT', 'USDCUSDT',
    'DAIUSDT', 'XRPUSDT', 'BNBUSDT','ADAUSDT','SOLUSDT','DOGEUSDT','DOTUSDT','TRXUSDT','AVAXUSDT'];

    useEffect(() => {
      const intervalId = setInterval(() => {
        axios.get(
          'https://api.binance.com/api/v3/ticker/24hr'
        )
        .then(res => {
          setCoins(res.data);
        })
        .catch(error => console.log(error));
      }, 2000)

      return () => clearInterval(intervalId);
    })

    const filteredCoinsUSDT = coins.filter(coin => coin.symbol.includes('USDT'));
    const filteredCoinsNull = filteredCoinsUSDT.filter(coin => coin.lastPrice > 0.01);
    const orderedCoinsDesc = filteredCoinsNull.sort((a,b) => b.quoteVolume - a.quoteVolume);
    const filteredCoins100 = orderedCoinsDesc.slice(0,100);

    return(
      <>
        <div>
          {filteredCoins100.map(coin => {
            return(
              <Coin
                key={coin.symbol}
                symbol={coin.symbol}
                price={parseFloat(coin.lastPrice).toFixed(3)}
                priceChangePercent={parseFloat(coin.priceChangePercent).toFixed(2)}
              />
            );
          })}
        </div>
      </>
    );
  }
  
export default SerchCoins;