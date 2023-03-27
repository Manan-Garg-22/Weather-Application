const options = {
	method: 'GET',
	headers: {
		"X-RapidAPI-Key": "a41f1c9bbcmsh3476a0e62a823bap192bf9jsnd6a2ce5a228c",
		"X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com"
	}
};

let url='https://weatherapi-com.p.rapidapi.com/current.json?q=%3CREQUIRED%3E';
let icon=document.getElementById('icon');
icon.addEventListener('click',search);
function search(e){
    let sval=document.getElementById('S')
    url=`https://weatherapi-com.p.rapidapi.com/current.json?q=%3C${sval.value}%3E`
    fetch(url, options)
	.then(response => response.json())
	.then(response => {

        temp.innerHTML=response.current.temp_c
        humidity.innerHTML=response.current.humidity
        wind.innerHTML=response.current.wind_kph
        loc.innerHTML=response.location.name.toUpperCase()

        console.log(response)
    }
        )
	.catch(err => console.error(err));
    const ai = {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'content-type': 'application/json',
          'X-API-KEY': '663d1402-30f0-4a43-90c2-877f2b61dc55'
        },
        body: JSON.stringify({
          enable_google_results: 'true',
          enable_memory: false,
          input_text: `Funny statement about weather in ${sval.value} in about 30 words`
        })
      };
      
      fetch('https://api.writesonic.com/v2/business/content/chatsonic?engine=premium', ai)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            GPT.innerHTML=response.message;
        })
        .catch(err => console.error(err));

}
