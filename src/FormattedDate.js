import React from "react";

export default function FormattedDate(props) {
    
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[props.date.getDay()];

    let date = props.date.getDate();

    let months = ["December", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November"];
    let month = months[props.date.getMonth()];

    
    return <div>{day} {date} {month}</div>

    
}