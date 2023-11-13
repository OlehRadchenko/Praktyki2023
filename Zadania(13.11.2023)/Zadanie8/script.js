/*Stwórz kompozycję która na tablicy „books” zwraca drugi najdłuższy tytuł (title).*/

const books = [
    {title: 'Total loss 100', pages: 600, genre: 'fantasy'},
    {title: 'Total enlightenment', pages: 250, genre: 'romance'},
    {title: 'Big loss', pages: 400, genre: 'fantasy'},
    {title: 'Tenth Joy', pages: 32, genre: 'action'},
    {title: 'Quickfix number 4', pages: 15, genre: 'fantasy'},
    {title: 'World Ender 3', pages: 199, genre: 'fantasy'},
    {title: 'Paranormal', pages: 200, genre: 'thriller'},
];
const sortBooksDesc = (list) => list.sort((a, b) => b.title.length - a.title.length);
const mapToTitle = (list) => list.map(({title}) => title);

const compose = (...fns) => (x) => fns.reduce((acc, fn) => fn(acc), x);

let result = compose(sortBooksDesc, mapToTitle);
console.log(result(books)[1]);// Wyciągamy drugi najdłuższy tytuł