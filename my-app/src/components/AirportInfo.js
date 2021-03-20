import React, {useState} from 'react';
import './AirportInfo.css';
import Quotes from './Quotes';

function AirportInfo() {
    //declare constants for path parameters
    const [quotes, setQuotes] = useState([])
    const [currency, setCurrency] = useState("")
    const [originplace, setOriginPlace] = useState("")
    const [destinationplace, setDestinationPlace] = useState("")
    const [outboundpartialdate, setOutBoundPartialDate] = useState("")
    const [inboundpartialdate, setInBoundPartialDate] = useState("")
    const [showQuotes, setShowQuotes] = useState(false)

    function handleSubmit(e) {
        e.preventDefault()
        async function fetchMyAPI() {
            const reqOptions = {
                method: 'GET',
                headers: {
                    "x-rapidapi-key": 
                    "f4d96e263bmshfb7569b1ceca5c6p16340djsn1967d8e15c5e",
                    "x-rapidapi-host": 
                    "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
                    "useQueryString": true
                }
            }
            const qString = {
                "inboundpartialdate": inboundpartialdate
            }
            // append path parameters to URL
            let response = await fetch('https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browseroutes/v1.0/US/' + currency + '/en-US/' + originplace + "/" + destinationplace + "/" + outboundpartialdate + "/?" + + new URLSearchParams({inboundpartialdate: inboundpartialdate}), reqOptions)     
            response = await response.json() 
            setQuotes(response.Quotes)
            console.log(response.Quotes)
        }
        fetchMyAPI()
        setOutBoundPartialDate("")
        setShowQuotes(true) 
    }
    
    return <div className="flightinfo">
        <form className = "form" onSubmit={handleSubmit}>
            {/* include text boxes to take relevant input from user */}
            <label htmlFor="originplace">Origin Airport Code</label>
            <input id="originplace" value={originplace} onChange={(e) => setOriginPlace(e.target.value)} required />

            <label htmlFor="destinationplace">Destination Airport Code</label>
            <input id="destinationplace" value={destinationplace} onChange={(e) => setDestinationPlace(e.target.value)} required />
            
            <label htmlFor="outboundpartialdateInput">Outbound Date</label>
            <input id="outboundpartialdateInput" value={outboundpartialdate} onChange={(e) => setOutBoundPartialDate(e.target.value)} required />
            
            <label htmlFor="inboundpartialdateInput">Inbound Date</label>
            <input id="inboundpartialdateInput" value={inboundpartialdate} onChange={(e) => setInBoundPartialDate(e.target.value)} required />
            
            <label htmlFor="currencyInput">Currency</label>
            <input id="currencyInput" value={currency} onChange={(e) => setCurrency(e.target.value)} required />   
            
            <button className="search">Submit</button>
        </form>

        {/* only show Quotes table if the showQuotes variable has been set to true */}
        { showQuotes ? <Quotes quotes={quotes}></Quotes> : <></>}
    </div>
}
export default AirportInfo;
