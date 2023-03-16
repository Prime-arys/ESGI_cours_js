const btn = document.getElementById('btn');
const img1 = document.getElementById('img1');


function fetch_neko(){
    return fetch('https://nekos.best/api/v2/neko');
}


btn.addEventListener('click', ()=>{
    console.log('click');
    const a = fetch_neko()
        .then(response => response.json())
        .then((json) => {
            console.log(json.results[0].url)
            img1.src = json.results[0].url;
        })
    
})




/*fetch('https://nekos.best/api/v2/neko')
  .then(response => response.json())
  .then(json => console.log(json.results[0].url))
  */