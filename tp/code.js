const btn = document.getElementById('btn');
const img1 = document.getElementById('img1');
const source = document.getElementById('source');
const artist_name = document.getElementById('artist_name');
const artist_url = document.getElementById('artist_url');



function fetch_neko(){
    return fetch('https://nekos.best/api/v2/neko'); // on appel l'api de neko.best
}


function neko(){
    const neko_apl = fetch_neko()
            .then(response => response.json()) //on recupère les données
            .then((json) => {
                console.log(json.results[0].artist_href)
                img1.src = json.results[0].url; //on définit l'url de l'image retourné
                source.textContent = json.results[0].artist_href;
                artist_name.textContent = json.results[0].artist_name;
                artist_url.textContent = json.results[0].source_url;
            })
}

neko(); //première image au chargement de la page

// lorsque que le bouton est cliqué
btn.addEventListener('click', ()=>{
    console.log('click');
    neko();
    
})





/*fetch('https://nekos.best/api/v2/neko')
  .then(response => response.json())
  .then(json => console.log(json.results[0].url))
  */