const API_KEY = "974402baa7d6dad0f1f5c3a591ca1a28"

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url =  `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    console.log(url);
    fetch(url).then((response) => response.json())
    .then(data=>{
        const city = document.querySelector("#weather span:first-child")
        const weather = document.querySelector("#weather span:last-child")
        
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}°C`;
    });
    //개발자 창의 NetWork를 들어가면 url을 요청한것을 볼 수 있다.
    //fetch: javascript가 대신해서 url을 요청한다.
}

function onGeoError(){
    alert("Can't find your location")
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError)
//getCurrentPosition함수는 첫번째 인수로 성공했을 때 실행되는 함수를 받고,
//두번째 인수는 에러가 나왔을 때 실행되는 함수를 실행한다.