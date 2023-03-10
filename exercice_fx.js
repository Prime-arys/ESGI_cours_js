
//1
const sum = function (a,b){
    return a+b;
}
console.log(sum(1,2)) // 3

//2
function tab_max(tab){
    let max=tab[0];
    tab.forEach(element => {
        if (element>max){
            max = element;
        }
    });
    return max;
}
console.log(tab_max([1,5,9,6])) // 9

//3
function anti_voyelle(mess){
    let mess_f = "";
    let voy = ['a','e','y','u','i','o'] //voyelle
    console.log(mess.length);
    for (let i = 0;i<mess.length;i++){
        if (!voy.includes(mess[i])){ // on verifie si notre lettre est inclue dans voy (!inverse la condition)
            mess_f=mess_f+mess[i];
        }
    }
    return mess_f;
    
}
console.log(anti_voyelle("azerty"));

//4
function al_tab_srt(tab){
    return tab.sort();
}
console.log(al_tab_srt(['a','r','z','b']));

//5
function num2al_cdu(num){
   const unite = ['zero','un','deux','trois','quatre','cinq','six','sept','huit','neuf'];
   const decimaux = ['dix','onze','douze','treize','quatorze','quinze','seize','dix-sept','dix-huit','dix-neuf'];
    const dizaine = ['dix','vingt','trente','quarante','cinquante','soixante','soixante','quatre-vingt','quatre-vingt'];
    const centaine = ['cent','deux-cent','trois-cent','quatre-cent','cinq-cent','six-cent','sept-cent','huit-cent','neuf-cent'];
    let num_f = "";
    let num_s = num.toString();
    console.log(num_s);

    if (num_s.length===1){ // taille à 1 chiffre
        num_f = unite[num_s[0]];
    }
    //(principe de la condition)
    else if (num_s.length===2){ // taille à 2 chiffres
        if (num_s[0]==='1'){ // si le premier chiffre est 1
            num_f = decimaux[num_s[1]]; // on prend le deuxieme chiffre dans decimaux
        } 
        //sinon
        else if (num_s[1]==='0'){ // si le deuxieme chiffre est 0
            num_f = dizaine[num_s[0]-1]; // on prend le premier chiffre dans dizaine
        } 
        //sinon
        else if (num_s[0]==='7' || num_s[0]==='9'){ // si le premier chiffre est 7 ou 9
            num_f = dizaine[num_s[0]-1]+"-"+decimaux[num_s[1]]; // on prend le deuxieme dans decimaux
        } 
        //sinon
        else {
            num_f = dizaine[num_s[0]-1]+"-"+unite[num_s[1]]; // on prend le deuxieme dans unite
        }
    }

    //(principe similaire mais avec 3 chiffres)
    else if (num_s.length===3){ // taille à 3 chiffres
        if (num_s[1]==='0' && num_s[2]==='0'){
            num_f = centaine[num_s[0]-1];
        } else if (num_s[1]==='0'){
            num_f = centaine[num_s[0]-1]+"-"+unite[num_s[2]];
        } else if (num_s[1]==='1'){
            num_f = centaine[num_s[0]-1]+"-"+decimaux[num_s[2]];
        } else if (num_s[2]==='0'){
            num_f = centaine[num_s[0]-1]+"-"+dizaine[num_s[1]-1];
        } else if (num_s[1]==='7' || num_s[1]==='9'){
            num_f = centaine[num_s[0]-1]+"-"+dizaine[num_s[1]-1]+"-"+decimaux[num_s[2]];
        } else {
            num_f = centaine[num_s[0]-1]+"-"+dizaine[num_s[1]-1]+"-"+unite[num_s[2]];
        }
    }
    else {
        num_f = "Nombre trop grand";
    }


    return num_f;

    

}
console.log(num2al_cdu(372));