import React from "react";
import useGeolocation from "../hook/useGeolocation";


const Weather = () =>{
    const location = useGeolocation();
    const {coordinates,loaded} = location
    const {lat,lng} = coordinates!;
    const WhatWeather = async () =>{
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=c85bd09079bcc3fff660a3ce0b7c8305`)
        .then((res)=>res.json())
        .then((data)=>console.log(data))
    }
    console.log(lat,lng)
    loaded&&WhatWeather()
    return (
        <div></div>
    )
}
//useGeolocation 위치 잘잡기
export default Weather;