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

###### Objets
- `{}` : objet  ex :
``` javascript
{a:1, b:2, c:3};// objet

let obj = { // objet dans une variable
    a:1, 
    b:2, 
    c:3
};
```
- `obj.a` : accès à la propriété a de l'objet d ex : 
``` javascript
console.log(obj.a); // 1
```
- constante sur l'objet
``` javascript
const e = {a:1, b:2, c:3};
e.a = 4;
console.log(e);
e = {a:4, b:5, c:6}; // erreur
e.a = 4; // ok
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
- tableau éclaté avec : `...` "[**_spread operator_**](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Spread_syntax)"
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
- `;` : fin de ligne (optionnel)
- `"` ou `'` ou  `` : chaîne de caractère
- `+` : concaténation
- `=` : affectation
- `==` : comparaison d'égalité
- `===` : comparaison d'égalité (en fonction du type)
- `&&` : ET; `||` : OU; `!` : NON; `!=` : différent;
- `try` `catch` : gestion des testes et des erreurs
  - ex : 
  ```js
    try {
        console.log("try"); //fonction à tester
    } catch (error) {
        console.log("catch"); //fonction en cas d'erreur
        console.log(error); //affiche l'erreur
        //console.error(error); //affiche l'erreur
    } 
    ```
- Camel case 
```js
 var anotherVariable = 2;
 ```
- Pascal case 
```js 
var TheNunber43 = 43;
```
- [MDN](https://developer.mozilla.org/fr/docs/) : documentation JS
- Ne pas utiliser JS pour faire des calculs Mathématiques
  - ex : `0.1 + 0.2` = `0.30000000000000004`
- objet iterable  : 
  - ex : `for (let i of arr) { console.log(i); }`
  - documentation : [MDN](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Iteration_protocols)
- Regex : [MDN](https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Expressions_r%C3%A9guli%C3%A8res)
  - ex : `let regex = /a/;`
  - ex : `let regex = new RegExp("a");`
  - ex with replace : [MDN](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/String/replace#utilisation_de_global_et_ignore_avec_replace)
  - [DOC RegExp](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
  - [regex101](https://regex101.com/)
- API fetch [MDN](https://developer.mozilla.org/fr/docs/Web/API/Fetch_API)
- Promise [MDN](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise)



