const API_KEY = `887693a0bf522e339b8c22daa61133eb`
const form = document.querySelector('form')
const search = document.querySelector('#search')
// const weather = document.querySelector("#weather")
// // const API = `https://api.openweathermap.org/data/2.5/weather?
// //     // q=${city}&appid=${API_KEY}&units=metric`
// // const IMG_URL = `https: //openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
const getWeather = async(city) => {
    weather.innerHTML = `<h2> Loading... <h2>`
    const url=`http://api.openweathermap.org/data/2.5/weather?q=${city}&${API_KEY}&units=metric`
    const response = await fetch(url)
    const data = await response.json()
    return showWeather(data)
}


const showWeather = (data) => {

    if (data.cod == "404") {
        weather.innerHTML = `<h2> City Not Found <h2>`
        return;
    }
  weather.innerHTML = `<div>

</div>
<div>
 <h2>${`data.main.temp`} ℃</h2>
 <h4>${`data.weather[0].main`}</h4>
</div>`
}


 form.addEventListener(
     "submit",
     function(event) {
        getWeather(search.value)
         event.preventDefault();
     }
 )