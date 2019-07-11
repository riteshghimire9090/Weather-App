

      document.getElementById('btn').onclick=()=>{
        var sea=document.getElementById("search").value;
  
            fetch(`Https://api.openweathermap.org/data/2.5/weather?q=${sea}&units=metric&APPID=2cea5839d90ad88591a98a350563814a`)
          //waiting promise
                .then(data=>{
                   return data.json();
                              })
                                    .then(data2=>{
                                         console.log(data2)
                                         //console.log(data2.main.temp)
                                        //putting fetch data in info id
                                        /*
                                       inside main : grnd_level: 736.45
humidity: 89
pressure: 1001.98
sea_level: 1001.98
temp: 15.95
temp_max: 15.95
temp_min: 15.95
--------------------------------------------------
inside wind:
deg: 303.212
speed:
                                        */
                                         document.getElementById("info").innerHTML=`
<ul>
      <li>Place:${data2.name}</li>
      <li>Tempreture:${data2.main.temp} C*</li>
      <li>Humidity:${data2.main.humidity} </li>
      <li>Pressure:${data2.main.pressure} </li>
      <li>Tempearture at Max:${data2.main.temp_max} C*</li>
      <li>Tempearture at Min:${data2.main.temp_min} C*</li>
      <li>Condition:${data2.weather[0].description}</li>
      <li>Wind Degree:${data2.wind.deg}</li>
      <li>Wind Speed:${data2.wind.speed}k/hr</li>
    </ul>

  `
})

}