const weather=document.querySelector(".js-weather");

const COORDS=`coords`;
const API_KEY=`308f996653cb5a48024a63912477a76f`;

function getWeather(lat,lon){
fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
.then(function(response){
    return response.json();
}).then(function(json){
const temperature=json.main.temp;
const place=json.name;
weather.innerText=`${temperature}@ ${place}`;
});

}

function saveCoords(coordsObj){

    localStorage.setItem(COORDS,JSON.stringify(coordsObj));
}

function handleGeoSuccess(position){
const latitude=position.coords.latitude;
const longitude=position.coords.longitude;

const coordsObj={
    latitude,
    longitude
};

saveCoords(coordsObj);

getWeather(latitude,longitude);
}

function handleGeoError(){
    console.log(`cant access geo location`);
}
function askForCoords(){
navigator.geolocation.getCurrentPosition(handleGeoSuccess,handleGeoError);
}


function loadCoords(){
    const loaded=localStorage.getItem(COORDS);
    if(loaded===null){

        askForCoords();
    }
    else{

    const parsed=JSON.parse(loaded);

    getWeather(parsed.latitude,parsed.longitude);

    }
}

function init(){
    loadCoords();
}

init();