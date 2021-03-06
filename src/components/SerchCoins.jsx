import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Coin from './Coin';
import '../utils/Coin.css';

function SerchCoins() {
    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState('');
    
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        axios.get(
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24'
        )
        .then(res => {
          setCoins(res.data);
        })
        .catch(error => console.log(error));
      }, 1000)

      return () => clearInterval(intervalId);
    });
  
    const handleChange = e => {
      setSearch(e.target.value);
    };
  
    const filteredCoins = coins.filter(coin =>
      coin.name.toLowerCase().includes(search.toLowerCase())
    );
  
    return (
      <>
      <div className='coin-app'>
        <div className='coin-search'>
          <form>
            <input
              className='coin-input'
              type='text'
              onChange={handleChange}
              placeholder='Buscar'
            />
              <div className='coin-row-start'>
                <div className='coin'>
                    <h2 className='coin-rank'>#</h2>
                    <h1>Nombre</h1>
              </div>
                <div className='coin-data'>
                  <p className='coin-price'>Precio</p>
                  <p className='coin-volume'>Volumen</p>
                </div>
           </div>
          </form>
        </div>
        {filteredCoins.map(coin => {
          return (
            <Coin
              key={coin.id}
              rank={coin.market_cap_rank}
              name={coin.name}
              price={coin.current_price}
              symbol={coin.symbol}
              marketcap={coin.total_volume}
              volume={coin.market_cap}
              image={coin.image}
              priceChange={coin.price_change_percentage_24h}
            />
          );
        })}
      </div>
      </>
    );
  }

export default SerchCoins;