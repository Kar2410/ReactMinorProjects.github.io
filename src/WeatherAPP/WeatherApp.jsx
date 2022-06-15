import React, { useState, useEffect } from "react";
import "./weatherApp.css";

function WeatherApp() {
  const [city, setcity] = useState("");
  const [city_updated, setcity_updated] = useState("Tinsukia");
  const [maindata, setmaindata] = useState("");
  const [sysdata, setsysdata] = useState("");
  const [weatherdata, setweatherdata] = useState("");
  const [winddata, setwinddata] = useState("");

  const time = new Date().toLocaleTimeString();
  const date = new Date().toDateString();

  function InputEvent(data) {
    setcity(data.target.value);
  }

  function submit(event) {
    setcity_updated(city);
    event.preventDefault();
    setcity("");
  }

  useEffect(() => {
    DataUpdate();
  }, [city_updated]);
  {
    /* here in array city_updated is there bcz it means call the DataUpdated function whenever city name is grtting updated */
  }


  async function DataUpdate() {
    const API_URL = `http://api.openweathermap.org/data/2.5/weather?q=${city_updated}&appid=1e56df2e7c1721befafb5e7ebda2efab&units=metric`;
    //const API_URL = `https://kinesis.us-east-2.amazonaws.com/&appid=AKIA25ZYNVCIJTO7CXEJ`;

    const response = await fetch(API_URL);
    const resjson = await response.json();
    console.log(resjson);
    setmaindata(resjson.main);
    setsysdata(resjson.sys);
    setweatherdata(resjson.weather[0]);
    setwinddata(resjson.wind);
  }

  const icon = `http://openweathermap.org/img/w/${weatherdata.icon}.png`;

  return (
    <>
      <div className="light-theme">
        <section id="main">
          <nav>
            <h1>
              Kartik Weather App <i className="fas fa-cloud-meatball"></i>
            </h1>
            <h3 style={{ marginLeft: "900px", fontSize: "25px" }}> {time}</h3>
          </nav>

          <main>
            <form className="input" style={{ postion: "absolute" }}>
              <input
                type="text"
                className="inputValue"
                placeholder="Enter a city"
                value={city}
                onChange={InputEvent}
              />
              <button className="button" onClick={submit}>
                Search
              </button>
            </form>
          </main>

          {/* it means if maindata is empty then show this h1 other wise show main content */}
          {!maindata ? (
            <h1 style={{ marginTop: "240px", marginLeft: "600px" }}>
        
              City not found 😢
            </h1>
          ) : (
            <>
              <main>
                <div className="temp">
                  <div className="label">
                    <sup id="marker">
                      <i className="fas fa-map-marker-alt"></i>
                    </sup>
                    <h1 id="name"> {city_updated}</h1>
                    <sub id="country"> {sysdata.country}</sub>
                  </div>

                  <h1 id="temp"> {maindata.temp} °C</h1>
                  <div className="min-max">
                    <span id="max" style={{ fontSize: "20px" }}>
                     
                      {maindata.temp_max}
                    </span>
                    <span id="slash" style={{ fontSize: "20px" }}>
                      /
                    </span>
                    <span id="min" style={{ fontSize: "20px" }}>
                
                      {maindata.temp_min}
                    </span>
                    <span style={{ padding: "0 10px" }}></span>
                    <span id="day" style={{ fontSize: "20px" }}>
                      {date}
                    </span>
                  </div>
                  <span id="description" style={{ fontSize: "30px" }}>
                  
                     <img src={icon} alt="" />   {weatherdata.main}
                    <span id="desc"></span>
                  </span>
                </div>
              </main>

              <div className="more">
                <div
                  className="row container-fluid"
                  style={{ backgroundColor: "transparent" }}
                >
                  <div className="col-6 col-md-3 col-sm-3">
                    <h1 style={{ fontSize: "40px" }}>
                
                      {maindata.feels_like}
                      <sub style={{ fontSize: "25px" }}>°C</sub>
                    </h1>
                    <p style={{ fontSize: "20px" }}>Real feel</p>
                  </div>
                  <div className="col-6 col-md-3 col-sm-3">
                    <h1 style={{ fontSize: "40px" }}>
                      {winddata.speed}
                      <sub style={{ fontSize: "25px" }}>km/h</sub>
                    </h1>
                    <p style={{ fontSize: "20px" }}>
                      <span id="direction"></span> wind
                    </p>
                  </div>
                  <div className="col-6 col-md-3 col-sm-3">
                    <h1 style={{ fontSize: "40px" }}>
                
                      {maindata.humidity}
                      <sub style={{ fontSize: "25px" }}>%</sub>
                    </h1>
                    <p style={{ fontSize: "20px" }}> Humidity</p>
                  </div>
                  <div className="col-6 col-md-3 col-sm-3">
                    <h1 style={{ fontSize: "40px" }}>
                
                      {maindata.pressure}
                      <sub style={{ fontSize: "25px" }}>hPa</sub>
                    </h1>
                    <p style={{ fontSize: "20px" }}>Pressure</p>
                  </div>
                </div>
              </div>
            </>
          )}
        </section>
      </div>
    </>
  );
}
export default WeatherApp;
