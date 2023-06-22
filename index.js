let input = document.getElementById('input');
let btn = document.getElementById('btn');

btn.addEventListener('click', myFunction);
input.addEventListener('click', myFunction2);

function myFunction2() {
    e.preventDefault();
    let zipCode = document.getElementById('zipCode').value;
    let url = "http://api.weatherapi.com/v1/current.json?key=66f6758d2dce44048d8180824232206&q="+zipCode+"&aqi=no"
    if (zipCode === '') {
        alert('Please enter a zip code');
    } else {
        fetch(url, {
                    method: 'GET', 
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                  .then(response => response.json())
                  .then(data => {
                        console.log(data);
                    })
            
}
}
