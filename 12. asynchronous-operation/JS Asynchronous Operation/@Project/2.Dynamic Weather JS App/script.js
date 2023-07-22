// alert(location)
const submitBtn = document.getElementById("submitBtn");
const cityName = document.getElementById("cityName");
const location1 = document.getElementById("location");
const weather = document.getElementById("weather");
const temp = document.getElementById("temp");
const temp_min = document.getElementById("temp_min");
const temp_max = document.getElementById("temp_max");

async function getData(event){
    event.preventDefault();
    if(cityName.value == ""){
        alert("Please write city name!")
    }
    else{
        try{
            const api = `https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&units=mertics&appid=a840f8d5c6b45d7291e7dca9dc2b51a3`
            const response = await fetch(api);
            const data = await response.json();
            location1.innerHTML = data.name, data.sys.country;
            weather.innerHTML = data.weather[0].main;
            temp.innerHTML = data.main.temp;
            temp_min.innerHTML = data.main.temp_min;
            temp_max.innerHTML = data.main.temp_max;
        }catch{
            alert("Please enter city name properly!")
        }
    }
}
submitBtn.addEventListener("click", getData);
