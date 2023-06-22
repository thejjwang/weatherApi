let btn = document.getElementById('btn');
let currentTemp = document.getElementById('temp');
let locationName = document.getElementById('locationName');
let locationRegion = document.getElementById('locationRegion');
let currentConditionText = document.getElementById('currentConditionText');

btn.addEventListener('click', myFunction);
input.addEventListener('click', myFunction2);

function myFunction() {
    let zipCode = document.getElementById('zipCode').value;
    let url = "http://api.weatherapi.com/v1/current.json?key=66f6758d2dce44048d8180824232206&q="+zipCode+"&aqi=no"
    if (zipCode === '') {
        alert('Please enter a zip code');
    } else {
        fetch(url, {
                    method: 'GET', 
                    headers: {
                            "Transfer-Encoding": "chunked",
                            "Connection": "keep-alive",
                            "Vary": "Accept-Encoding",
                            "CDN-PullZone": "93447",
                            "CDN-Uid": "8fa3a04a-75d9-4707-8056-b7b33c8ac7fe",
                            "CDN-RequestCountryCode": "GB",
                            "CDN-ProxyVer": "1.03",
                            "CDN-RequestPullSuccess": "True",
                            "CDN-RequestPullCode": "200",
                            "CDN-CachedAt": "06/22/2023 18:10:09",
                            "CDN-EdgeStorageId": "946",
                            "CDN-Status": "200",
                            "CDN-RequestId": "a74c292c9cef24f7c8c4673c6f7ece7a",
                            "CDN-Cache": "HIT",
                            "Cache-Control": "public, max-age=180",
                            "Content-Type": "application/json",
                            "Date": "Thu, 22 Jun 2023 18:11:07 GMT",
                            "Server": "BunnyCDN-FR1-1074"
                    }
                })
                    .then(response => response.json())
                    .then(data => {
                        currentTemp.innerText = data.current.temp_f;
                        currentConditionText.innerText = data.current.condition.text;
                        locationName.innerText = data.location.name;
                        locationRegion.innerText = data.location.region;
                        weatherContainer.style.display = 'block';
                        console.log(data);
                    })
                    .catch(error => console.log(error));
                    
            
}
}
