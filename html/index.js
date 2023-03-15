const inp_from = document.getElementById('frm1');
const inp_to = document.getElementsByName('radio1');
const btn = document.getElementById('btn1');
const inp_t = document.getElementById('input1');
const select_t = document.getElementById('select1');
const img_t = document.getElementById('img1');


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
    alert(inp_t.value);
})


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

