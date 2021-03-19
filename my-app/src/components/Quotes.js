import React from 'react';
import './Quotes.css';

function Quotes(props) { 
    return (
        <div className = "quotes">
            <table>
                <thead>
                    <tr>
                        <th>Quote ID</th>
                        <th>Min Price</th>
                        <th>Date and Time</th>
                    </tr>
                </thead>
                <tbody>                  
                    {props.quotes && props.quotes.map(quote => {
                        return (<tr id={quote.QuoteId}>
                            <td>{quote.QuoteId}</td>
                            <td>{quote.MinPrice}</td>
                            <td>{quote.QuoteDateTime}</td>
                         </tr>)
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default Quotes;