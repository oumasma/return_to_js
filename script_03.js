//Quel est le chiffre d'affaires moyen par utilisateur ?
average = users.reduce((sum, { revenue }) => {
    return sum + revenue;
}, 0) / users.length,

console.log('la moyenne est de', (average / 100), '€');


//Quel est le pourcentage d'utilisateurs ayant rapporté de l'argent (revenue différent de 0) ?
//let getUsers = users.filter(item => item.revenue > 0);


//Parmi les utilisateurs ayant rapporté de l'argent, quel est le chiffre d'affaires moyen d'un utilisateur ?
let findUsers = users.filter(item => item.revenue > 0);
average = findUsers.reduce((sum, { revenue }) => {
    return sum + revenue;
}, 0) / findUsers.length,

console.log('la moyenne est de', (average / 100), "€ chez les utilisateurs qui ont rapporté de l'argent");


//Combien avons-nous gagné d'argent au total ?
let sum = users
  .map(item => item.revenue)
  .reduce((prev, curr) => prev + curr, 0);

  console.log('Un total de ', (sum / 100), '€ gagné');


//Combien avons-nous d'utilisateurs en France ?
let numUsersFrance = users.reduce(function (n, person) {
    return n + (person.country == 'France');
}, 0);

console.log("Le nombre d'utilisateurs en France est de ", (numUsersFrance));

//Parmis ces utilisateurs, combien avons-nous de clients payants en France ?
let findPayUsers = users.filter(item => item.revenue > 0);
numPayUsersFrance = findPayUsers.reduce(function (n, person) {
    return n + (person.country == 'France');
}, 0);

console.log("Le nombre d'utilisateurs payant en France est de ", (numPayUsersFrance));

//Donne-moi le chiffre d'affaires répartis dans nos 4 pays les plus représentés (Allemagne, États-Unis, France, Grande Bretagne) 
//(chiffre d'affaires total, en France, aux États-Unis, etc)

//Fais-moi la liste de tous les pays dans lesquels nous avons gagné de l'argent ?
let getCountry = users.filter((item) => {
    return item.revenue > 0;
});
console.log(getCountry);

//Quels sont nos 5 utilisateurs qui nous ont rapporté le plus d'agent ?

//Gagnons-nous plus d'argent auprès des hommes ou des femmes ?

//Sors-moi les utilisateurs ayant rapporté au moins 75€

let getUsers = users.filter(item => item.revenue >= 7500);
console.log('Les utilisateurs ayant rapporté au moins 75$ : ', (getUsers))

//Parmi nos 100 premiers utilisateurs, quel est le pourcentage qui sont clients payants ?
