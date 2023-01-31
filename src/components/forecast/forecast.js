import React from "react";
import "./forecast.css";
/**
 * Funktionskomponent visar en 7-dagars väderprognos
 * Komponenten räknar först den aktuella dagen och skapar en uppsättning på veckodagar
 * Väderinformation(data) för de dagar skrivs från data.list
 * **/

const WEEK_DAYS = ['Måndag', 'Tisdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lördag', 'Söndag'];

const Forecast = ({ data }) => {
    const dayInAWeek = new Date().getDay();
    const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));

    return (
        <div className="forecast-container">
            <label className="title">7 dagars prognos</label>
            {data.list.splice(0, 7).map((item, idx) => (
                <div className="daily-item">
                    <img src={`icons/${item.weather[0].icon}.png`} className="icon-small" alt="weather" />
                    <label className="day">{forecastDays[idx]}</label>
                    <label className="description">{item.weather[0].description}</label>
                    <label className="min-max">{Math.round(item.main.temp_max)}°C /{Math.round(item.main.temp_min)}°C</label>
                </div>
            ))}
        </div>
    );
};

export default Forecast;
