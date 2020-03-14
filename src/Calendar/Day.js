import React, { Component } from 'react';

export default function Day({fullDate}){
    if (fullDate == null) {
        return <div className="emptyDay"/>
    }

    const date = fullDate.getDate();
    const className = "day";

        return ( 
            <button className ={className}> {date} </button> 

        );
}

 