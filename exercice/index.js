//node index.js Notes
console.log('Hello World');

var a = 1;
var b = "Hello World";
var c = true;

console.log(typeof a);

let texte = "Hello World";
console.log(texte);

const PI = 3.14;
try {
    PI = 3.15;
} catch (error) {
    //console.log(error);
    console.log("PI is a constant");
}

const tab = [1, 2, 3];
const new_tab_lenght = tab.push('Hello World');
console.log("tab : ",tab);
console.log("new_tab_lenght : ",new_tab_lenght);
console.log("tab[0] : ",tab[0]);
tab[0] = 10;
console.log("tab[0] : ",tab[0]);
tab.forEach(element => {
    console.log("tab : ",element);
});

const o_tab = [1, 2, 3];
console.log("o_tab : ", o_tab.slice(0, 2));//renvoie un nouveau tableau avec les éléments de 0 à 2
console.log("o_tab : ", o_tab.splice(0, 2));//renvoie un nouveau tableau avec les éléments de 0 à 2 et supprime les éléments de 0 à 2
console.log("o_tab : ", o_tab);

let age = 18;
if (age>=18){
    console.log("Majeur");
} else {
    console.log("mineur");
}
console.log((age >= 18) ? "majeur" : "mineur");

if (1==1){
    console.log("égale"); //ok
} else {
    console.log("non égale");
}

if (1=="1"){
    console.log("égale"); //ok
} else {
    console.log("non égale");
}

if (1==="1"){
    console.log("égale");
} else {
    console.log("non égale"); //ok
}

const myArray = [1,2,"toto",true ,'test'];
for (let index=0;index<myArray.length;index++){
    console.log(myArray[index]);
}

for (const elt in myArray){
    console.log(myArray[elt]);
}

let myObj = {
    prenom : '©me',
    nom : '©me_again',
    age : 18,
    enVie : true,
    password : "wellsecure"
}

for(const key in myObj){
    const elt = myObj[key];
    console.log(elt);
}

function sum(a,b){
    return a+b;
}
/*
const sum = function (a,b){
    return a+b;
}
*/
// () => {}
//const sum = (a,b) => a+b; //return inplicite
console.log(sum(5,10));

const arr = [1,2,3];
console.log(arr); // [1,2,3]
console.log(...arr); // 1 2 3
console.log([arr,4,5]); //[[1,2,3,],4,5]
console.log([...arr,4,5]);//[1,2,3,4,5]



