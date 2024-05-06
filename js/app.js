// const config = {
//     type: 'line',
//     data: data,
//   };

// const labels = Utils.months({count: 7});
// const data = {
//   labels: labels,
//   datasets: [{
//     label: 'My First Dataset',
//     data: [65, 59, 80, 81, 56, 55, 40],
//     fill: false,
//     borderColor: 'rgb(75, 192, 192)',
//     tension: 0.1
//   }]
// };



const ctx = document.getElementById('myCanvas').getContext('2d');


let gradient = ctx.createLinearGradient(0,0,0,400);
gradient.addColorStop(0, 'rgba(58, 35, 35, 1')
gradient.addColorStop(1, 'rgba(128, 35, 35, 0.3')

new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [{
      label: 'Soil moisture of your field (kg/m3)',
      data: [2, 19, 16, 5, 8, 15],
      borderWidth: 3,
      backgroundColor: gradient,
      borderColor: '#2D232E',
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          fontSize: 16, // Set font size for y-axis ticks
        }
      },
      x: {
        ticks: {
          fontSize: 16, // Set font size for x-axis ticks
        }
      }
    }
  }
});








// ! +++++++++++++++++     WEATHER CONDITIONS ++++++++++++++++++++++++++++++++++

const apiKey="8f4df03fe4fb2c928c6fae2d9a985afd"
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response =await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status ==404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        var data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+ "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";
    
        if(data.weather[0].main =="Clouds"){
            weatherIcon.src = "./img/images/clouds.png";
            }
        else if (data.weather[0].main =="Clear"){
            weatherIcon.src = "./img/images/clear.png";
        }
        else if (data.weather[0].main =="Rain"){
            weatherIcon.src = "./img/images/rain.png";
        }
        else if (data.weather[0].main =="Drizzle"){
            weatherIcon.src = "./img/images/drizzle.png";
        }
        else if (data.weather[0].main =="Mist"){
            weatherIcon.src = "./img/images/mist.png";
        }
    
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";

    }
   
    }


    searchBtn.addEventListener("click", ()=>{
        checkWeather(searchBox.value);
    })
