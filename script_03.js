//Quel est le chiffre d'affaires moyen par utilisateur ?

const total = (accumulator, user) => {return accumulator, user.revenue}
let totalCA = users.reduce(total, 0)


console.log('la moyenne est de', (totalCA / 100), '€');


//Quel est le pourcentage d'utilisateurs ayant rapporté de l'argent (revenue différent de 0) ?
//let getUsers = users.filter(item => item.revenue > 0);

const filtrePasGratos = user => { return 0 != user.revenue }
let usersPayants = users.filter(filtrePasGratos)
console.log("NB users payants: ", usersPayants.length)
console.log("NB users payants: ", usersPayants.length / users.length * 100)



//Parmi les utilisateurs ayant rapporté de l'argent, quel est le chiffre d'affaires moyen d'un utilisateur ?
console.log("=== Pour les users payants: ")
chiffreAffaireTotal = usersPayants.reduce(AccumulateurChiffreAffaireTotal, 0)
console.log("CA total: ", chiffreAffaireTotal )
// CA moyen = CA total / nb users
console.log("CA moyen: ", chiffreAffaireTotal / usersPayants.length )



//Combien avons-nous gagné d'argent au total ?
let sum = users
  .map(item => item.revenue)
  .reduce((prev, curr) => prev + curr, 0);

  console.log('Un total de ', (sum / 100), '€ gagné');


//Combien avons-nous d'utilisateurs en France ?
const filtreFrancais = user => { return "France" == user.country }
let usersFrancais = users.filter(filtreFrancais)
console.log("Users FR: ", usersFrancais.length)

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
