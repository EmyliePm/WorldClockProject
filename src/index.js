//current time for user
function updateCurrentTime() {
  let currentTimeElement = document.querySelector("#currentTimeZone");
  let currentTimeZone = moment.tz.guess();
  let currentTime = moment().tz(currentTimeZone);
  currentTimeElement.innerHTML = `Current time in ${currentTimeZone} is ${currentTime.format(
    "h:mm:ss [<small>]A[</small>]"
  )}`;
}

//London
function updateLondonTime() {
  let londonElement = document.querySelector("#london");
  let londonDateElement = londonElement.querySelector(".date");
  let londonTimeElement = londonElement.querySelector(".time");
  let londonTime = moment().tz("Europe/London");
  londonDateElement.innerHTML = moment().format(" Do dddd MMMM YYYY");
  londonTimeElement.innerHTML = londonTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

//Paris
function updateParisTime() {
  let parisElement = document.querySelector("#paris");
  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement = parisElement.querySelector(".time");
  let parisTime = moment().tz("Europe/Paris");
  parisDateElement.innerHTML = moment().format(" Do dddd MMMM YYYY");
  parisTimeElement.innerHTML = parisTime.format("h:mm:ss [<small>]A[</small>]");
}

//Tokyo
function updateTokyoTime() {
  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoTimeElement = tokyoElement.querySelector(".time");
  let tokyoTime = moment().tz("Asia/Tokyo");
  tokyoDateElement.innerHTML = moment().format(" Do dddd MMMM YYYY");
  tokyoTimeElement.innerHTML = tokyoTime.format("h:mm:ss [<small>]A[</small>]");
}
setInterval(updateCurrentTime, 1000);
setInterval(updateLondonTime, 1000);
setInterval(updateParisTime, 1000);
setInterval(updateTokyoTime, 1000);
