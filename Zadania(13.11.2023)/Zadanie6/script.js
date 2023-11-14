/*Stwórz kompozycję która na tablicy „books” zlicza ilość liter w tytule (title) nie licząc spacji, gdzie
strony (pages) są parzyste oraz genre kończy się na literkę „y”.*/

const books = [
    {title: 'Total loss 100', pages: 600, genre: 'fantasy', rating: 7},
    {title: 'Total enlightenment', pages: 250, genre: 'romance', rating: 4},
    {title: 'Big loss', pages: 400, genre: 'fantasy', rating: 2},
    {title: 'Tenth Joy', pages: 32, genre: 'action', rating: 9},
    {title: 'Quickfix number 4', pages: 15, genre: 'fantasy', rating: 8},
    {title: 'World Ender 3', pages: 199, genre: 'fantasy', rating: 1},
    {title: 'Paranormal', pages: 200, genre: 'thriller', rating: 5},
];
const filterPagesEven = (list) => list.filter((book) => book.pages%2 == 0);
const filterGenreEndY = (list) => list.filter((book) => book.genre.endsWith("y"));
// ALBO MOŻNA TAK: const filter = (list) => list.filter((book) => book.genre.endsWith("y") && book.pages%2 == 0);
const sumLetters = (book) => book.reduce((totalLetters, book) => totalLetters + book.title.replace(/\s/g, '').length, 0);

const compose = (...fns) => (x) => fns.reduce((acc, fn) => fn(acc), x);

let result = compose(filterPagesEven, filterGenreEndY, sumLetters);
console.log(result(books));