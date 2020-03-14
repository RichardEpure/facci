import React, { Component } from 'react';

export default function Weekday({label, title}) {
    return (
        <div aria-label = {label} className = "weekday">
            {title}
        </div>

    );
}