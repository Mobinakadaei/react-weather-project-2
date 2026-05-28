import React from "react";
import './Weather.css'

export default function Weather() {
    return (<div className="weather">
        <form>
            <div className="row">
                <div className="col-9">
                    <input type="search" placeholder="Insert the name of a city" className="form-control" autoFocus="on" />
                </div>
                <div className="col-3">
                    <input type="submit" value="Search" className="btn btn-primary w-100" />
                </div>
            </div>
        </form>
        <h1>Utrecht</h1>
        <ul>
            <li>
                Wednesday 12:00
            </li>
            <li>
                Sunny
            </li>
        </ul>
        <div className="row">
            <div className="col-6 d-flex align-items-center">
                <img src="https://www.gstatic.com/weather/conditions/v1/svg/partly_cloudy_light.svg" alt="Partly sunny" />
                <span className="temperature">26</span><span className="unit">°C</span>
            </div>
            <div className="col-6">
                <ul>
                    <li>Precipitation: 1% </li>
                    <li>Humidity: 47% </li>
                    <li>Wind: 14 km/h </li>
                </ul>
            </div>

        </div>
    </div>
    )
}