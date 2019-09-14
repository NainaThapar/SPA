import React from "react";
import "./main.css";
import cycle from "../../images/cycle.png";

const Main = () => {
  let today = new Date();
  var tomorrow = new Date();
  let date = today.getDate();
  let month = today.getMonth() + 1;
  let year = today.getFullYear();

  let tom = tomorrow.setDate(today.getDate() + 1);
  let tomDate = tomorrow.toDateString();
  let countdown = new Date(tomDate).getTime();
  let todayDate = `${date}/${month}/${year}`;
  let second = 1000;
  let minute = second * 60;
  let hour = minute * 60;
  let day = hour * 24;
  let x = setInterval(function() {
    let now = new Date().getTime(),
      distance = countdown - now;
    let x = Math.floor((distance % day) / hour);
    let y = Math.floor((distance % hour) / minute);
    let z = Math.floor((distance % minute) / second);
    let t = `${x} Hours ${y} Minutes ${z} Seconds`;
    document.getElementById("ct").innerHTML = t;
  }, second);

  return (
    <div className="main-container">
      <div className="heading">MAKE IT HAPPEN</div>
      <div className="design-quote">
        LIFE IS ALL ABOUT <span className="balance">balance</span>
      </div>
      <div className="right-img">
        <img src={cycle} width="100px" height="100px" />
      </div>

      <div style={{ display: "block" }}>
        Date: <span style={{ fontWeight: "bold" }}>{todayDate}</span>
      </div>
      <p>
        Countdown:{" "}
        <span id="ct" style={{ fontWeight: "bold", color: "maroon" }}></span>
      </p>

      <p style={{ color: "red" }}>
        The site is under construction. Thanks for your patience.
      </p>
    </div>
  );
};

export default Main;
