const form=document.querySelector('form');
// let city=getElementById("txtweather");
 const card2=document.getElementById('card2');
const body=document.querySelector('body');
function doshow()
{
    const city=document.getElementById("txtweather");
    // alert(city.value);
    const c=city.value;
    // alert(c);
    // console.log(c);
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=40673358b916b76f83fc5062da84b99e`;
    fetch(url)
    .then((data)=>{
        return data.json();
    })
    .then((dataa)=>{
        console.log(dataa);
        // alert(dataa);
        if(dataa.name==undefined )
        {
            // alert("undefined city name")
            window.location.href=window.location.href;  
        }
        else
        {
  card2.style.display='block';
        
        document.getElementById("li1").innerHTML=dataa.name;
        const days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
const months=['January','February','March','April','May','June','July','August','September','October','November','December'];
var currentdate=new Date();
        document.getElementById("li2").innerHTML=currentdate.getDate()+" "+months[currentdate.getMonth()]+" (" +days[currentdate.getDay()]+") "+currentdate.getFullYear();
        document.getElementById("li3").innerHTML=(dataa.main.feels_like-273.7).toFixed(0)+"&#176;C";
        document.getElementById("li4").innerHTML=((dataa.main.temp_min-273.7).toFixed(0)+"&#176;C")+" (min) / "+(dataa.main.temp_max-273.7).toFixed(0)+"&#176;C"+ "(max)";
        document.getElementById("li5").innerHTML=dataa.wind.speed+" kms";
        document.getElementById("li6").innerHTML=dataa.weather[0].description;
        if(dataa.weather[0].description=="scattered clouds" || dataa.weather[0].description=="few clouds")
        {
            body.style.backgroundImage="url('pics/scattered-clouds.jpg')";
        }
       else if(dataa.weather[0].description=="haze")
        {
            body.style.backgroundImage="url('pics/haze.jfif')";
        }
        else if(dataa.weather[0].description=="overcast clouds")
        {
            body.style.backgroundImage="url('pics/overcast.jfif')";
        }
        else if(dataa.weather[0].description=="broken clouds")
        {
            body.style.backgroundImage="url('pics/brokenCloud.jpg')";
        }
        else if(dataa.weather[0].description.includes("rain"))
        {
            body.style.backgroundImage="url('pics/rain.jfif')";
        }
        else if(dataa.weather[0].description=="clear sky")
        {
            body.style.backgroundImage="url('pics/clearSky.jpg')";
        }
        else if(dataa.weather[0].description=="mist")
        {
            body.style.backgroundImage="url('pics/mist.jpg')";
        }
        else if(dataa.weather[0].description.includes("snow"))
        {
            body.style.backgroundImage="url('pics/snowfall.jfif')";
        }
        
    }
    })
    .catch((err)=>
    {
        console.log(err.message);
    })
}
form.addEventListener('submit',(e)=>{
   e.preventDefault();
    doshow();
});