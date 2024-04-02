import {useEffect, useState} from "react"


function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://v6.exchangerate-api.com/v6/d85a93de789666a11320c912/latest/${currency}`)
        .then((res) => res.json())
        .then((res) => setData(res.conversion_rates))
    }, [currency])
    console.log('data',data);
    return data
}

export default useCurrencyInfo;