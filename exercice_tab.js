//exercices Tableaux

//1
const myTab = [1,2,3,4,5,6,7,8,9,10];
let i=0;
myTab.forEach(elt => {
    console.log("myTab["+i+"] : ",elt)
    i+=1;
});

//2
const week = ["Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi","Dimanche"];
let jour = 0;
console.log("jour : ",week[jour]);

//3
const pair_nb = [2,4,6,8,10];
let result_1 = 0;
pair_nb.forEach(elt=>{
    result_1+=elt
})
console.log("pair_nb : ",result_1);

//4
const fruit = ["Banane","Pomme","Poire","Fraise","Orange"];
fruit.push("Mangue"); // (retourne la nouvelle taille)
console.log("fruit : ",fruit);

//5
const notes = [8,12,10,18,15]
let moy_note=0;
notes.forEach(elt=>{
    moy_note+=elt
})
moy_note/=notes.length;
console.log("note : ",moy_note);

//6
const oiseaux = ["Pigeon","Corbeau","Mouette","Goéland","Hirondelle"];
function tab_recherche(term,tab){
    let r = false;
    tab.forEach(elt=>{
        if (elt == term){
            r = true;
        }
    })
    return r;
}
if(tab_recherche("Corbeau",oiseaux)){
    console.log("Dans le tableu")
} else {
    console.log("N'est pas dans le tableau")
}

//7
const pays = ["France","Belgique","Suisse","Angletaire","Allemagne","Espagne"];
console.log("pays : ",pays.sort())

//8
const mois = ["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"];
console.log("3e mois : ",mois[3-1])

//9
const num = [];
let al;
for(let i=0;i<10;i+=1){
    al = Math.round(Math.random()*100);
    num.push(al);
}
console.log(num)
console.log(Math.min(...num)) // ... : renvoie les données du tableau (éclate les données)
console.log(Math.max(...num))

//10
const phrase =[
    "Oh Wow.",
    "Je suis beau.",
    "J'aime !",
    "La couleur est le vide et le vide est la couleur.",
    "Aller regaerder mon Github (Prime-arys)."
]
let phc = "";
phrase.forEach(elt=>{
    if (elt.length>phc.length){
        phc = elt;
    }
})
console.log(phc);

