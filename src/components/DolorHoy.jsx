import React, {useState, useEffect} from 'react';
import axios from 'axios';
import '../utils/Dolar.css';

function DolarHoy() {
    const [dolar, setDolar] = useState([]);
    
  
    useEffect(() => {
        axios.get(
          'https://api.bluelytics.com.ar/v2/latest'
        )
        .then(res => {
          setDolar(res.data);
        })
        .catch(error => console.log(error));
      },1000)
    
  
    return (
      <>
        <p className='price'> Dolar Oficial: ${dolar.oficial.value_avg}</p>
        <p className='price'>Dolar Blue: ${dolar.blue.value_sell}</p>
      </>
    );
  }

export default DolarHoy;