const display = document.querySelector(".display");
const search = document.querySelector(".search");
const loader = document.querySelector(".loader");

const apiKey = "ad9efa648efb19a69fbb181af8542c16";
document.querySelector(".btn").addEventListener("click", () => {
  const searchValue = search.value.toUpperCase();

  if (search.value == "") {
    alert("city name is required!");
  } else {
    loader.style.display = "block";
    display.innerHTML = "";
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=${apiKey}`;
    fetch(api)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        loader.style.display = "none";
        console.log(data);
        const imgCod = `http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;

        const temperature = data.main.temp - 273.15;
        console.log(data);
        const currentWeather = `<p>${data.name}</p>
        <img  src="${imgCod}"/>
        <p>${Math.floor(temperature) + "&#8451"}</p>
        <p>${data.weather[0].description}</p>
        <p>${data.weather[0].main}</p>
        <p>${data.timezone}</p>
        `;

        display.innerHTML = currentWeather;
      });
  }
});
