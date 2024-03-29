const inp_from = document.getElementById('frm1');
const inp_to = document.getElementsByName('radio1');
const btn = document.getElementById('btn1');
const inp_t = document.getElementById('input1');
const select_t = document.getElementById('select1');
const img_t = document.getElementById('img1');
const paragraphe = document.getElementById('paragraphe');

const themes ={
    light: {
        primary: '#4453d4',
        secondary: '#36352b',
        background: '#dfdfdd'
    },
    dark: {
        primary: '#d4a251',
        secondary: '#e7e7e7',
        background: '#2b2c36'
    }
}

const setTheme = (theme) => {
    document.documentElement.style.setProperty('--primary-color', theme.primary);
    document.documentElement.style.setProperty('--secondary-color', theme.secondary);
    document.documentElement.style.setProperty('--background-color', theme.background);
    //console.log('setTheme');
    //console.log(theme);
}


select_t.value = '1'; //valeur par défaut pour le changement de la page

select_t.addEventListener('change', () => {
    if (select_t.value === '1') {
        setTheme(themes.light);
        //console.log('light');
    } else {
        setTheme(themes.dark);
        //console.log('dark');
    }
})

btn.addEventListener('click', () => {
    //titre de la page
    document.title = inp_t.value;
    //alert(inp_t.value);
    paragraphe.innerHTML = "Bonjour vous, " + inp_t.value;
})

const promise = new Promise((resolve, reject) =>{
    setTimeout(() => {
        const randomNumber = Math.floor(Math.random() * 10)
        if (randomNumber % 2 === 0) {
            resolve(randomNumber);
           
        } else {
            reject(new Error('Le nombre est impair.'));
        }
        
    
    }, 500)
    
})
promise 
    .then(result => console.log("nombre : ",result)) // retoure de 'resolve', avec console.log du resultat ("ce fait après fin execution promesse")
    .catch(error => console.error(error.message)); // retoure de 'reject', avec console.log du resultat

inp_to.value = '1';
inp_to[0].checked = true;
inp_to.forEach((inp) => {
    inp.addEventListener('change', () => {
        img_t.setAttribute('class' , 'myanm', 'myanm2');
        img_t.classList.remove('myanm', 'myanm2');
        void img_t.offsetWidth;
        switch (inp.value) {
            case '1':
                img_t.src = 'https://media.tenor.com/gdjvRr2WymYAAAAC/pacha-perfect.gif';
                img_t.classList.add('myanm');
                break;
            case '2':
                img_t.src = 'https://media.tenor.com/ZFPKlHHJ-FMAAAAd/internet-wow.gif';
                img_t.classList.add('myanm2');
                break;
            case '3':
                img_t.src = 'https://media.tenor.com/K_8abXDQ5wsAAAAi/stonks-up.gif';
                img_t.classList.add('myanm3');
                break;
        }
 
        

    })
})


function fetch_somme_pokemon(){
    return fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
}

function doPKM(arg){
    console.log(arg);
    let o = Math.floor(Math.random() * 150);
    console.log(o+1," : ",arg.results[o].name); //nom et n° d'un pokemon aléatoire dans la liste obtenue 
}

const pokemon = fetch_somme_pokemon().then((http_rseponse) => {
    console.log(http_rseponse);
    return http_rseponse.json()
}).then((pokemon_liste) => {
    //console.log(pokemon_liste);
    doPKM(pokemon_liste);
    
});




