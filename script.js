function search(){
    locate=inputData.value
    console.log(locate);
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${locate}&appid=68b0b5f0db57621f8d1e51cddcf907aa&units=metric`)
    .then(res=>res.json())
    .then(data=>weatherData(data))
    .catch(err => alert('fetching Failed'))
}
function weatherData(data){  
    let district=data.name
    let humidity=data.main.humidity
    let wind=data.wind.speed
    let pressure=data.main.pressure
    let temp2=data.main.temp
    let sunny=data.weather[0].description
    // let maximum=data.main.temp_max+
    // let minimum=data.main.temp_min
    


    loc.innerHTML=district +`<span style=" font-weight: 500;
    color: rgb(205, 176, 28);
    font-family: 'Rubik Dirt', cursive;">,IN</span>`;
    humidity1.innerHTML=humidity ;
    wind1.innerHTML=wind;
    pressure1.innerHTML=pressure;
    temp1.innerHTML=temp2 +`<span  style=" font-weight: 500;
    color: rgb(205, 176, 28);
    font-family: 'Rubik Dirt', cursive;"> °c </span>`
    sunny1.innerHTML=sunny
    // max.innerHTML=maximum
    // min.innerHTML=minimum
   

    //    Image
if(temp2>35){
    image.innerHTML=`<img style="width: 100px; height: 100px;" id="icon" src="https://media1.giphy.com/media/WxK5PIZnukRqksLYAx/giphy.gif?cid=ecf05e472ffc0pcpzj5w8b2padpz994f7rh0j3gtarkaiopq&ep=v1_gifs_related&rid=giphy.gif&ct=s" alt="">`
}else if(temp2<35 && temp2>30 ){
    image.innerHTML=`<img style="width: 100px; height: 100px;" id="icon" src="https://media1.giphy.com/media/UnyblOs6hGx9Mli7jq/giphy.gif" alt="">`
}else if(temp2<30){
    image.innerHTML=`<img style="width: 100px; height: 100px;" id="icon" src="https://media.giphy.com/media/3ohhwsupwJyzktdgS4/giphy.gif" alt="">`

}






  
    
  
}
    
// Time


function clock(){

    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        let date = new Date()
        let todayD  = date.getDate()
        let hours = date.getHours()
        let minutes = date.getMinutes()
        let month = months[date.getMonth()]
        let year = date.getFullYear()
    
        todayHours.innerHTML=hours
        todayMinutes.innerHTML=minutes
    
        todayDate.innerHTML=todayD
        todayMonth.innerHTML=month
        todayYear.innerHTML=year
        setTimeout(()=>{
            clock()
        },1000)
}
   clock();

