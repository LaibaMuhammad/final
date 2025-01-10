
const apiFatch = ()=>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const apiKey = "2171e4c8cb12df3621bd10506252c3c2";
    var response = fetch(url)            
    return response
 }
apiFatch().then((data)=>{
var data1 = data.json()              
 data1.then(res =>{
     console.log(res)
 })
}).catch((err)=>{
    throw new Error("the error is" , err)
 })
