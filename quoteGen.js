const quote = document.querySelector('.quote');
const person = document.querySelector('.person');
const btn = document.querySelector('.btn');
btn.addEventListener('click', changeQuote);

let quotes = [
    {quote: 'When you reach the end of your rope, tie a knot in it and hang on.',
     person: 'Frankin D. Roosevelt'},
    {quote: 'Just remember that you are absolutely unique, just like everybody else.',
     person: 'Margaret Mead'},
    {quote: 'Do not judge each day by the harvest you reap but by the seeds that you paint.',
     person: 'Robert Louis Stevenson'},
    {quote: 'The future belongs to those who believe in the beauty of their dreams.',
     person: 'Eleanor Roosevelt'},
    {quote: 'Tell me and I forget. Teach me and I remember. Involve me and I learn.',
     person: 'Benjamin Franklin'},
    {quote: 'The best and most beautiful things of this world cannot be seen or touched, they must be felt with the heart.',
     person: 'Hellen Keller'},
    {quote: 'It is during our darkest moments that we must focus to see the light.',
     person: 'Aristotle'},
    {quote: 'Who ever is happy will make others happy too.',
     person: 'Anne Frank'},
    {quote: 'Do not go where the path may lead, go instead where there is no path and learn.',
     person: 'Ralph Waldo Emerson'},
]

function changeQuote(){
    let random = Math.floor(Math.random(quotes) * quotes.length);
    quote.innerHTML = quotes[random].quote;
    person.innerHTML = quotes[random].person;
}
