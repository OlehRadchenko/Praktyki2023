/*Stwórz kompozycję która na tablicy „books” zlicza ilość liter w tytule (title) nie licząc spacji, gdzie
strony (pages) są parzyste oraz genre kończy się na literkę „y”.*/

const books = [
    {title: 'Total loss 100', pages: 600, genre: 'fantasy'},
    {title: 'Total enlightenment', pages: 250, genre: 'romance'},
    {title: 'Big loss', pages: 400, genre: 'fantasy'},
    {title: 'Tenth Joy', pages: 32, genre: 'action'},
    {title: 'Quickfix number 4', pages: 15, genre: 'fantasy'},
    {title: 'World Ender 3', pages: 199, genre: 'fantasy'},
    {title: 'Paranormal', pages: 200, genre: 'thriller'},
];
const filterPagesEven = (list) => list.filter((book) => book.pages%2 == 0);
const filterGenreEndY = (list) => list.filter((book) => book.genre.endsWith("y"));
// ALBO MOŻNA TAK: const filter = (list) => list.filter((book) => book.genre.endsWith("y") && book.pages%2 == 0);
const sumLetters = (book) => book.reduce((totalLetters, book) => totalLetters + book.title.replace(/\s/g, '').length, 0);

const compose = (...fns) => (x) => fns.reduce((acc, fn) => fn(acc), x);

let result = compose(filterPagesEven, filterGenreEndY, sumLetters);
console.log(result(books));