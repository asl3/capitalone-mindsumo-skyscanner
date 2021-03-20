import React from 'react';
import './Quotes.css';

function Quotes(props) { 
    let minprice = Number.MAX_SAFE_INTEGER

    // iterate through all prices, if current price is lower than min, set minprice to current price
    {props.quotes && props.quotes.map(quote => {
        if (quote.MinPrice < minprice) {
            minprice = quote.MinPrice;
        }
    })}

    // return a display table containing resulting data values from API request
    return (
        <div className = "quotes">
            <table>
                <thead>
                    <tr>
                        <th>Quote ID</th>
                        <th>Minimum Price</th>
                        <th>Date and Time</th>
                    </tr>
                </thead>
                <tbody>  
            
                {props.quotes && props.quotes.map(quote => {
                    // if current price equal to min price, bold entire row
                    if (quote.MinPrice == minprice) {
                        return (<tr id={quote.QuoteId}>
                            <td><b>{quote.QuoteId}</b></td>
                            <td><b>{quote.MinPrice}</b></td>
                            <td><b>{quote.QuoteDateTime}</b></td>
                        </tr>)
                    } else {
                        return (<tr id={quote.QuoteId}>
                            <td>{quote.QuoteId}</td>
                            <td>{quote.MinPrice}</td>
                            <td>{quote.QuoteDateTime}</td>
                        </tr>)
                    }
                })}
                </tbody>
            </table>
        </div>
    );
}

export default Quotes;