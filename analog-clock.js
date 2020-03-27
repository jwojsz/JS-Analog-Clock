const HOURHAND = document.querySelector("#hr");
const MINUTEHAND = document.querySelector("#mn");
const SECONDHAND = document.querySelector("#sc");

var date = new Date();
console.log(date);
let hr = date.getHours();
let mn = date.getMinutes();
let sc = date.getSeconds();
console.log("Hour: " + hr + "Minute: " + mn + "Second: " + sc);

let hrPosition = (hr*360/12)+(mn*360/60)/12;
let mnPosition = (mn*360/60)+(sc*360/60)/60;
let scPosition = sc*360/60;

function runTheClock() {
  hrPosition = hrPosition+(3/360);
  mnPosition = mnPosition+(6/60);
  scPosition = scPosition+6;

  HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
  MINUTEHAND.style.transform = "rotate(" + mnPosition + "deg)";
  SECONDHAND.style.transform = "rotate(" + scPosition + "deg)";
}

varinterval = setInterval(runTheClock, 1000);
