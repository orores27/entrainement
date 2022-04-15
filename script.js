//********************************* Exercice page 1 ********************************************************/
/************************************exercice 1 ************************************************************/
// let exercice;
// // console.log(exercice);
/************************************exercice 2 ************************************************************/

// let exo = true;
// // console.log(exo);
/************************************exercice 3 ************************************************************/

// // let number1 = 4;
// // let number2 = 2;
// // let result = number1 + number2;
// // console.log(result);
/************************************exercice 4 ************************************************************/

// // let lastName = "Doe";
// // let firstName = "John";
// // let city = "New-York";
// // console.log(lastName, firstName, city);
// //alert("Nom:" + lastName + "\nPrénom:" + firstName + "\nVille" + city);
/************************************exercice 5 ************************************************************/


// // Prompt Dialog Box ===> pour une boite de dialogue
// // let prompt = "Bonjour";

// // function test()
//     let result = prompt("Quel est votre Prénom ?");
//         alert('Bonjour '+ result);
// // test();

//*********************************exercice page 2 **********************************************************/
/************************************exercice 1 ************************************************************/


// let number = 4;
// // console.log(number) 
// function compter() {
//     return number*2-3;
// }
// compter();
// alert(compter());

//********************************exercice 2 ****************************************************************/

// let chiffre = 14;
// // console.log(chiffre)
// function diviser() {
//     return chiffre%3;
// }
// alert(diviser());

//*********************************exercice 3 ***************************************************************/

// let numero = 5;
// // console.log(multiplier)
// function multiplier() {
//     return numero*2-3;
// }
// alert(multiplier());

//*********************************exercice 4 ***************************************************************/

// exercice associé avec à une page testUnit.js : 
// étape 1 : on crée une fonction 'multiplier'
// étape 2 : on crée un paramètre de la fonction ici 'compter'
//le paramètre 'compter' sert d'ancre pour appeler la valeur que je lui attribue et je l'appelle sur un autre fichier. en lui donnant la valeur que je veux calculer.

// function multiplier(compter) {
//     console.log(compter*10);
// }

//*********************************exercice 5 ***************************************************************/

//Création d'une 'fonction' qui permet de compter le nombre de lettre dans ma variable 'text'. On utilise la fonction = length//
// let text = 'Sabah est en galère.';
// let length = text.length;
// let para = document.getElementById('prenom').innerHTML = length;

//*********************************exercice 6 **************************************************************/
// Ici on met le titre en majuscule en utilisant la méthode 'uppercase'
//je déclare ma constante et j'appelle le 'h1' avec un queryselector
//j'appelle la 'méthode' : 	******object.style.textTransform="uppercase"***** pour mettre en majuscule
const title = document.querySelector('h1');
title.style.textTransform ="uppercase";
// console.log(title.toUpperCase())

//mettre un paragraphe en minuscule : syntaxe = object.style.textTransform="lowercase"
const first = document.querySelector('#first');
// console.log(first)
first.style.textTransform = 'lowercase';



//Changer la couleur d'un texte avec la syntaxe : 
// function changecouleur(couleur) {
//     document.getElementById('texte').style.color = couleur;
//   }
//je ne déclare pas de variable, je crée la fonction directement. 
//j'appelle mon "id" et je lui dis ce que je veux que la fonction fasse (style.color) et ensuite je rappelle le paramètre 'couleur' et enfin j'appelle ma fonction en lui donnant la couleur que je veux qu'elle applique. 
// function changecouleur(couleur) {
//     document.getElementById("second").style.color = couleur;
// }
// changecouleur('red');
// // console.log(changecouleur)


//Cacher un paragraphe, je déclare ma constante third qui est mon 'id'. je l'appelle avec'getElementById. ensuite, je fais disparaitre mon paragraphe avec objet.style.display = 'none';
const third = document.getElementById('third');
third.style.display = 'none';


//**************************************page 3 ****************************************/
//***********************************exercice 1 ***************************************/
//insérer une image dans html et la faire s'aagrandir au clic 







