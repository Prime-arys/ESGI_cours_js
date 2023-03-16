
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
const tab_max_2 = (tab) => { console.log(Math.max(...tab)) };tab_max_2([1,5,9,6]); // 9

//3
function anti_voyelle(message){
    let mess_f = "";
    let voy = ['a','e','y','u','i','o'] //voyelles
    console.log("num voy : ",message.length);
    for (let i = 0;i<message.length;i++){
        if (!voy.includes(message[i])){ // on verifie si notre lettre est inclue dans voy (!inverse la condition)
            mess_f=mess_f+message[i];
        }
    }
    return mess_f;
    
}
console.log(anti_voyelle("azerty"));
const anti_voyelle_2 = (message) => { console.log(message.replace(/[aeiouy]/gi,"")) };anti_voyelle_2("azerty"); // zrt

//4
function al_tab_srt(tab){
    return tab.sort();
}
console.log(al_tab_srt(['a','r','z','b']));

//5
function num2alphabet_cdu(num){
   const unite = ['zero','un','deux','trois','quatre','cinq','six','sept','huit','neuf'];
   const decimaux = ['dix','onze','douze','treize','quatorze','quinze','seize','dix-sept','dix-huit','dix-neuf'];
   const dizaine = ['dix','vingt','trente','quarante','cinquante','soixante','soixante','quatre-vingt','quatre-vingt'];
   const dizaine_i = ['dix','vingt','trente','quarante','cinquante','soixante','soixante-dix','quatre-vingt','quatre-vingt-dix'];
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
            num_f = dizaine_i[num_s[0]-1]; // on prend le premier chiffre dans dizaine
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
            num_f = centaine[num_s[0]-1]+"-"+dizaine_i[num_s[1]-1];
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
console.log(num2alphabet_cdu(398));

//6
function prp_obj(tab_o,prop){
    const tab_f =[];
    tab_o.forEach(elt => {
        tab_f.push(elt[prop]);
    });
    //return tab_f; 
    return tab_o.map((obj)=>obj[prop]);
}
const obj1={
    test:"01",
    no_test:"02"
}

const obj2={
    test:"81",
    no_test:"82"
}
console.log(prp_obj([obj1,obj2],"test"));

//7
function dc_num(tab){
    return tab.sort((a, b) => b - a); // methode la plus precise (retourne 30,9,8,7,6,4,2,1)
    //return tab.sort().reverse(); // autre methode (moins precise, retourne 9,8,7,6,30,1)
}
console.log(dc_num([8,2,4,6,30,1,7,9]));

//8
function maj_voyelle(mess){
    let mess_f = "";
    let voy = ['a','e','y','u','i','o'] //voyelle
    //console.log(mess.length);
    for (let i = 0;i<mess.length;i++){
        if (voy.includes(mess[i])){ // on verifie si notre lettre est inclue dans voy (!inverse la condition)
            mess_f=mess_f+mess[i].toUpperCase();
        }
        else {
            mess_f=mess_f+mess[i]
        }
    }
    return mess_f;
    
}
console.log(maj_voyelle("azerty"));
const maj_voyelle2 = (message) => { console.log(message.replace(/[aeiouy]/gi, (v) => v.toUpperCase())); };maj_voyelle2("azerty");

//9
function num_voyelle(mess){
    let mess_f = 0;
    let voy = ['a','e','y','u','i','o'] //voyelle
    //console.log(mess.length);
    for (let i = 0;i<mess.length;i++){
        if (voy.includes(mess[i])){ // on verifie si notre lettre est inclue dans voy (!inverse la condition)
            mess_f++;
        }
    }
    return mess_f;
    
}
console.log("voy : ",num_voyelle("azerty"));
const num_voyelle2 = (message) => { console.log("voy2 : ", message.match(/[aeiouy]/gi).length); };num_voyelle2("azerty");

//10
function maj_cons(mess){
    let mess_f = "";
    let voy = ['a','e','y','u','i','o'] //voyelle
    //console.log(mess.length);
    for (let i = 0;i<mess.length;i++){
        if (!voy.includes(mess[i])){ // on verifie si notre lettre est inclue dans voy (!inverse la condition)
            mess_f=mess_f+mess[i].toUpperCase();
        }
        else {
            mess_f=mess_f+mess[i]
        }
    }
    return mess_f;
    
}
console.log(maj_cons("azerty"));
const maj_cons2 = (message) => { console.log(message.replace(/[^aeiouy]/gi,(v) => v.toUpperCase())); };maj_cons2("azerty");
