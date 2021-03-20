import React from 'react';
import './Header.css';

function Header(props) { 
    return (
        <div>
            <h1 className = "header">Flight Information</h1>
            <p className = "instructions"><b>Enter information below to view flight options between two destinations for specified dates.</b> Enter origin and destination in airport code format (e.g. SFO-sky, ORD-sky). Enter currency in ISO format (e.g. USD, EUR). For unspecified dates, enter "anytime."</p>
        </div>
    );
}

export default Header;