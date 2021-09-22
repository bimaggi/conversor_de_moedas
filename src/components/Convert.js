import React,{useState,useEffect} from 'react';

const BASE_URL= 'https://economia.awesomeapi.com.br/all'

function Convert(){

    const [dollarToday, setDollarToday] = useState(0)
    const [currencyAmountDollar, setCurrencyAmountDollar] = useState(0)
    const [currencyAmountReal, setCurrencyAmountReal] = useState(0)
    const [amountDollar, setAmountDollar] = useState()
    const [amountReal, setAmoutReal] = useState()

   
    function convertDolar(){
        let resultDolar = amountDollar / dollarToday
        setCurrencyAmountDollar(resultDolar)
    }

    function convertReal(){
        let resultReal = amountReal * dollarToday
        setCurrencyAmountReal(resultReal)
    }

    useEffect(()=>{
        fetch(BASE_URL)
        .then(res=>res.json())
        .then(data=>{
            const USD = data.USD.ask
            setDollarToday(USD)
        })
    },[])
  
    return(
        <>
        <div className="dolarHoje"><strong>Dólar Hoje: $ {dollarToday}</strong></div>
        <div className="convert">
            <div className= "converter">
                <h1>Converte Real em Dolar </h1>
                <input type="number" onChange={(e)=>setAmountDollar(e.target.value)} value={amountDollar}/>
                <button onClick={convertDolar}>Converte</button>
                <p><strong>Valor convertido: </strong>$ {currencyAmountDollar}</p>
            </div>
            <div className= "converter">
                <h1>Converte Dolar em Real </h1>
                <input type="number"  onChange={(e)=>setAmoutReal(e.target.value)} value={amountReal}/>
                <button onClick={convertReal}>Converte</button>
                <p><strong>Valor convertido: </strong>R$ {currencyAmountReal}</p>
            </div>
        </div>
        </>
    )
}
export default Convert