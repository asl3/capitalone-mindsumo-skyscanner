import React, {useState} from 'react';
import './AirportInfo.css';
import Places from './Places';

function AirportInfo() {
    const [places, setPlaces] = useState([])
    const [query, setQuery] = useState("")
    const [showPlaces,setShowPlaces] = useState(false)

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
                "query": query
            }
            let response = await fetch('https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/US/USD/en-US/?' + new URLSearchParams(qString), reqOptions)    
            response = await response.json() 
            setPlaces(response.Places)
            console.log(response.Places)
        }
        fetchMyAPI()
        setQuery("")
        setShowPlaces(true) 
    }
    
    return <div className="airportinfo">
        <form onSubmit={handleSubmit}>
            <label htmlFor="queryInput">City or Country</label>
            <input id="queryInput" value={query} onChange={(e) => setQuery(e.target.value)} required />
            <button className="search">Submit</button>
        </form>
        { showPlaces ? <Places places={places}></Places> : <></>}

        <Places places={places}></Places>
    </div>
}
export default AirportInfo;
