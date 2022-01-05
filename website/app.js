/* Global Variables */
const baseUrl = 'http://api.openweathermap.org/data/2.5/weather?zip=94040&appid=';
const apiKey = '315358e97288e02ffe61a64132d5aa2f&units=imperial';

// post data when button is clicked
const btn = document.querySelector("#generate");

// change color of button while hovering.
btn.onmouseover = () =>{
    
}

btn.onclick = () => {
    // change the text on btn while getting the data from the url.
    btn.innerHTML = "Loading...";

    // getting the data from api.
    fetch(baseUrl + apiKey)
    .then((response) => response.json())
    .then((data) =>{
        postData('/weatherData', data);
    })
    .then(async (response) =>{
        const data = await getData();
        return data;
    })
    .then(async (data) =>{
        updateUI(data)
    })
    .catch ((error) =>{ 
        console.log(error);
    });
}

// get function 
const getData = async (url = '/weatherData') => {
    const res = await fetch(url);

    try {
        const data = await res.json();
        return data;
    } catch (err) {
        console.error(err);
    }
}

// post request
const postData = async (url = 'weatherData', data = {}) =>{
    const res = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });

    try {
        const msg = await res.text();
        return msg;
    } catch (e) {
        console.error(e);
    }
}

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = (d.getMonth()+1)+'/'+ d.getDate()+'/'+ d.getFullYear();

// updateUI function
const date = document.querySelector('#date');
const temp = document.querySelector('#temp');
const content = document.querySelector('#content');

const updateUI = (data) =>{
    // return the text on button
    btn.innerHTML = "Done!!";

    temperatures = data['main'];
    date.innerHTML = "-Data: " + newDate;
    temp.innerHTML = '-Temperature: ' + temperatures['temp'] + '<br>' + 
                     '-Min Temperature: ' + temperatures['temp_min'] + '<br>' + 
                     '-Max Temperature: ' + temperatures['temp_max'];
    content.innerHTML = "-It feels like: " + temperatures['feels_like'];

    setTimeout(() =>{
        btn.innerHTML = "Generate";
    }, 1000)
}