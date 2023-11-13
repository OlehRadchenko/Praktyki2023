/*Stwórz kompozycję która na tablicy „books” zlicza ilość pozytywnych ocen (rating > 5), gdzie
strony (pages) są liczbą nieparzystą oraz tytuł (title) zawiera liczbę.*/

const books = [ //Dodałem do books rating bo w przykładzie nie było ;c
    {title: 'Total loss 100', pages: 600, genre: 'fantasy', rating: 10},
    {title: 'Total enlightenment', pages: 250, genre: 'romance', rating: 8},
    {title: 'Big loss', pages: 400, genre: 'fantasy', rating: 5},
    {title: 'Tenth Joy', pages: 32, genre: 'action', rating: 7},
    {title: 'Quickfix number 4', pages: 15, genre: 'fantasy', rating: 3},
    {title: 'World Ender 3', pages: 199, genre: 'fantasy', rating: 6},
    {title: 'Paranormal', pages: 200, genre: 'thriller', rating: 2},
];
const filterRatingMoreThan5 = (list) => list.filter((book) => book.rating > 5);

const filterPagesOdd = (list) => list.filter((book) => book.pages%2 == 1);
const filterTitleContainsNumber = (list) => list.filter((book) => /\d+/.test(book.title));
// ALBO MOŻNA TAK: const filter = (list) => list.filter((book) => /\d+/.test(book.title) && book.pages%2 == 1 && book.raing > 5);
const sumPages = (book) => book.reduce((totalPositiveRatings, book) => totalPositiveRatings + 1, 0);

const compose = (...fns) => (x) => fns.reduce((acc, fn) => fn(acc), x);

let result = compose(filterPagesOdd, filterTitleContainsNumber, filterRatingMoreThan5, sumPages);
console.log(result(books));