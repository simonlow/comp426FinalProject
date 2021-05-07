import React, { useState, useEffect} from 'react';
import axios from 'axios';
import "./_video.css";


function Bitcoin() {
    const [price, setPrice] = useState("");

    const getPrice = () => {
        axios.get("https://api.coindesk.com/v1/bpi/currentprice.json")
        .then((response) => {
            setPrice("At the day and time of " + response.data.time.updated + ", the price of bitcoin is $" + response.data.bpi.USD.rate)})
    };
    return (
        <div> 
           <button class = "button" onClick = {getPrice}>Press to see the price of Bitcoin</button>{price} 
        </div>
    )
}

export default Bitcoin;

/*
{"time":
    {"updated":"May 7, 2021 19:51:00 UTC",
    "updatedISO":"2021-05-07T19:51:00+00:00",
    "updateduk":"May 7, 2021 at 20:51 BST"},
"disclaimer":"This data was produced from the CoinDesk Bitcoin Price Index (USD). Non-USD currency data converted using hourly conversion rate from openexchangerates.org",
"chartName":"Bitcoin",
"bpi":
    {"USD":
        {"code":"USD",
        "symbol":"&#36;",
        "rate":"57,681.0404",
        "description":"United States Dollar",
        "rate_float":57681.0404},
    "GBP":
        {"code":"GBP",
        "symbol":"&pound;",
        "rate":"41,209.3541",
        "description":"British Pound Sterling",
        "rate_float":41209.3541},
    "EUR":{"code":"EUR",
        "symbol":"&euro;",
        "rate":"47,413.6998",
        "description":"Euro",
        "rate_float":47413.6998}
    }
}
*/