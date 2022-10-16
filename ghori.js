var hour = document.querySelector(".hour");
var minute = document.querySelector(".minute");
var second = document.querySelector(".second");

function setTime(){
  const time = new Date();

  const getSeconds = time.getSeconds();
  const getMinutes = time.getMinutes();
  const getHours = time.getHours();

  const secondDeg = (getSeconds/60)*360;
  const minuteDeg = (getMinutes/60)*360;
  const hourDeg = (getHours/12)*360;

  hour.style.transform = `rotate(${hourDeg}deg)`;
  minute.style.transform = `rotate(${minuteDeg}deg)`;
  second.style.transform = `rotate(${secondDeg}deg)`;
}

setInterval(setTime,1000);