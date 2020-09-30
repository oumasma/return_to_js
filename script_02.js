const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
  ];

//Sors-moi la liste des titres des livres du CDI
const getList = book => { return book.title};
let res = books.map(getList)
console.log('titres : ', res);

//Est-ce que tous les livres ont été au moins empruntés une fois ?


if(books.some(book => book.rented === 0)){
    console.log("Tous les livres n'ont pas été emprunté.");
  } else{
    console.log("Tous les livres ont été empruntés au mois une fois.");
  }


//Quel est livre le plus emprunté ?
const maxRented = (accumulator, book) => {return Math.max{accumulator, book.rented} }
res = books.reduce(maxRented, 0)
console.log("max de location", res)

//let maxRented = books.find( x => x.rented === Math.max.apply(Math, books.map((o) =>{ 
    //return o.rented; })))
//console.log(maxRented)

//Quel est le livre le moins emprunté ?

const minRented = (accumulator, book) => {return Math.min{accumulator, book.rented} }
res = books.reduce(books[0], rented)
console.log("min de location", res)

//Supprime le livre avec l'ID: 133712 ;

index = books.findIndex (x => x.id === 133712)
books.splice(index, 1)
console.log("livre id 133712 supprimé")
console.log(books)