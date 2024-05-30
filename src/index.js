//current time for user
function updateCurrentTime() {
  let currentTimeElement = document.querySelector("#currentTimeZone");
  if (currentTimeElement) {
    let currentTimeZone = moment.tz.guess();
    let currentName = currentTimeZone.replace("_", " ").split("/")[1];
    let currentTime = moment().tz(currentTimeZone);
    currentTimeElement.innerHTML = `Current time in ${currentName} is ${currentTime.format(
      "h:mm:ss [<small>]A[</small>]"
    )}`;
  }
}

//London
function updateLondonTime() {
  let londonElement = document.querySelector("#london");
  if (londonElement) {
    let londonDateElement = londonElement.querySelector(".date");
    let londonTimeElement = londonElement.querySelector(".time");
    let londonTime = moment().tz("Europe/London");
    londonDateElement.innerHTML = moment().format(" Do dddd MMMM YYYY");
    londonTimeElement.innerHTML = londonTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

//Paris
function updateParisTime() {
  let parisElement = document.querySelector("#paris");
  if (parisElement) {
    let parisDateElement = parisElement.querySelector(".date");
    let parisTimeElement = parisElement.querySelector(".time");
    let parisTime = moment().tz("Europe/Paris");
    parisDateElement.innerHTML = moment().format(" Do dddd MMMM YYYY");
    parisTimeElement.innerHTML = parisTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

//Tokyo
function updateTokyoTime() {
  let tokyoElement = document.querySelector("#tokyo");
  if (tokyoElement) {
    let tokyoDateElement = tokyoElement.querySelector(".date");
    let tokyoTimeElement = tokyoElement.querySelector(".time");
    let tokyoTime = moment().tz("Asia/Tokyo");
    tokyoDateElement.innerHTML = moment().format(" Do dddd MMMM YYYY");
    tokyoTimeElement.innerHTML = tokyoTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}
setInterval(updateCurrentTime, 1000);
setInterval(updateLondonTime, 1000);
setInterval(updateParisTime, 1000);
setInterval(updateTokyoTime, 1000);

//Selectors

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];

  function updateTime() {
    let selector = document.getElementById("selectorCity");
    let selectedOption = selector.options[selector.selectedIndex];
    if (selectedOption.value === "default") {
      cityName = moment.tz.guess();
    }

    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#displayedCities");
    citiesElement.innerHTML = `
      <div class="displayedCities">
        <div class="displayCity" id="city">
          <div class="left-section">
            <div class="location-box">
              <div class="location">${cityName}</div>
              <div class="date">${cityTime.format(" Do dddd MMMM YYYY")}</div>
            </div>
          </div>
          <div class="right-section">
            <div class="time">${cityTime.format(
              "h:mm:ss [<small>]A[</small>]"
            )}</div>
          </div>
        </div>
      </div>`;
  }

  // Call updateTime immediately to show the time right after selecting the city
  updateTime();

  // Clear any existing intervals to avoid multiple intervals running at the same time
  if (window.cityTimeInterval) {
    clearInterval(window.cityTimeInterval);
  }

  // Set an interval to update the time every second
  window.cityTimeInterval = setInterval(updateTime, 1000);
}

let citiesSelectElement = document.querySelector("#selectorCity");
citiesSelectElement.addEventListener("change", updateCity);
