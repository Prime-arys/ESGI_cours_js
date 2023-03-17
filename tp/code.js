// © R.CHAUSSY
const btn = document.getElementById('btn');
const img1 = document.getElementById('img1');
const source = document.getElementById('source');
const source_lnk = document.getElementById('source_lnk');
const artist_name = document.getElementById('artist_name');
const artist_url = document.getElementById('artist_url');
const artist_url_lnk = document.getElementById('artist_url_lnk');
const select_t = document.getElementById('select1');



function fetch_neko(){
    return fetch('https://nekos.best/api/v2/neko'); // on appel l'api de neko.best
}

function neko(){
    document.documentElement.style.setProperty('--loader', 'block'); // on masque l'image pour afficher l'annimation de chargement
    document.documentElement.style.setProperty('--load', 'none');

    const neko_apl = fetch_neko()
            .then(response => response.json()) //on recupère les données
            .then((json) => {
                //console.log(json.results[0].artist_href)
                img1.src = json.results[0].url; //on définit l'url de l'image retourné

                source.textContent = json.results[0].source_url; //on définit l'informations (source) retourné dans la balise
                source_lnk.href = json.results[0].source_url;

                artist_name.textContent = json.results[0].artist_name;

                artist_url.textContent = json.results[0].artist_href;
                artist_url_lnk.href = json.results[0].artist_href;


            })
            .then(() => {
                img1.onload = () => { // on réaffiche l'image un fois qu'elle est chargée
                    //console.log("ld");
                    document.documentElement.style.setProperty('--loader', 'collapse'); // (setProperty permet de changer la valeur d'une variable css)
                    document.documentElement.style.setProperty('--load', 'relative');
                }
            
            })
}

neko(); //première image au chargement de la page

// lorsque que le bouton est cliqué
btn.addEventListener('click', ()=>{
    //console.log('click');
    neko();
    
})

//image clickable
img1.addEventListener('click',()=>{
    window.open(img1.src); //s'ouvre dans un nouvelle onglet
})


const themes ={ //définition des thèmes dans un objet
    light: {
        primary: '#4453d4',
        secondary: '#36352b',
        background: '#dfdfdd',
        complete : "#d3d3cf"
    },
    dark: {
        primary: '#d4a251',
        secondary: '#e7e7e7',
        background: '#2b2c36',
        complete : "#1b1c26"
    }
}

//fonction qui permet de changer le thème en changeant les variables css
const setTheme = (theme) => {
    document.documentElement.style.setProperty('--primary-color', theme.primary);
    document.documentElement.style.setProperty('--secondary-color', theme.secondary);
    document.documentElement.style.setProperty('--background-color', theme.background);
    document.documentElement.style.setProperty('--complete-color', theme.complete);
    //console.log('setTheme');
    //console.log(theme);
}

const tm = new Date().getHours();
        //mode sombre : 22h-8h
        //mode claire : 8h-22h
const mybool = (tm>=8 & tm <=21);


if (mybool) {
    setTheme(themes.light);
    //console.log('light');
    select_t.value = '1'; //valeur par défaut pour le changement de la page
} else {
    setTheme(themes.dark);
    //console.log('dark');
    select_t.value = '2';
}

select_t.addEventListener('change', () => { //lorsque que l'on change la valeur du select
    if (select_t.value === '1') {
        setTheme(themes.light);
        //console.log('light');
    } else {
        setTheme(themes.dark);
        //console.log('dark');
    }
})


/*fetch('https://nekos.best/api/v2/neko')
  .then(response => response.json())
  .then(json => console.log(json.results[0].url))
  */