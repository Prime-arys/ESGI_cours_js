## Notes

#### Node JS
Dans un répertoire, créer un fichier `index.js` et y écrire du code JS.
Exécuter le code avec la commande `node index.js` dans le terminal (localisé au répertoire).

#### Pratique
exécuter régulièrement `node index.js` (ou autre) pour voir les changements et les erreurs.

#### JS
##### Variables
- `var` (globale, non recommandé) : variable  ex : 
``` javascript
var a = 1;
``` 

- `let` : variable  ex : 
``` javascript
let b = 2;
```
- `const` : constante  ex : 
``` javascript
const c = 3;
```

###### Tableau
- `[]` : tableau  ex : 
``` javascript
let d = [1, 2, 3];
```
- `d[0]` : accès à l'élément 0 du tableau d ex : 
``` javascript
console.log(d[0]);
```
- constante sur le tableau
``` javascript
const e = [1, 2, 3];
e[0] = 4;
console.log(e);
e = [4, 5, 6]; // erreur
e[0] = 4; // ok
```
- tableau éclaté avec : `...`
```js
const arr = [1,2,3];
console.log(arr); // [1,2,3]
console.log(...arr); // 1 2 3
console.log([arr,4,5]); //[[1,2,3,],4,5]
console.log([...arr,4,5]);//[1,2,3,4,5]

```

##### Condition
- Comparaison d'égaliter (en fonction du type)
```js
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
```

##### Fonction
```js
function sum(a,b){
    return a+b;
}

const sum = function (a,b){
    return a+b;
}

// () => {}
const sum = (a,b) => a+b; //return inplicite
```

##### Autres
- `console.log()` : affiche dans la console
- `//` ou `/**/` : commentaire
- Camel case 
```js
 var anotherVariable = 2;
 ```
- Pascal case 
```js 
var TheNunber43 = 43;
```
- [MDN](https://developer.mozilla.org/fr/docs/) : documentation JS

