
import { getJoke } from './http-provider'

const body = document.body;
let btnOtherJoke , olJokesList, jokeNumber = 0;

const createJokeHTML = () => {

    const html = 
    `
    <h1 class="mt-5">Chuck Norris Jokes - @rogeralbp</h1>
    <hr>
    
    <button class="btn btn-primary" id="other-joke">Other Joke</button>
    
    <ol class="mt-2 list-group" id="joke-ollist">

    </ol>

    `;

    const divJokes = document.createElement('div');
    divJokes.innerHTML = html;

    body.append(divJokes);

}


const eventsPage = () => {

    olJokesList  = document.querySelector('#joke-ollist');
    btnOtherJoke = document.querySelector('#other-joke');

    btnOtherJoke.addEventListener('click', async() => {

        btnOtherJoke.disabled = true;
        jokeNumber += 1;

        drawJoke( await getJoke() , jokeNumber );

        btnOtherJoke.disabled = false;

    });

}


const drawJoke = ( joke , jokeNumber ) => {

    const olJokeItem = document.createElement('li');

    olJokeItem.innerHTML = 
    
    `
    <b> ${ jokeNumber } </b> : ${ joke.value }
    <img src=" ${ joke.icon_url } " alt="150">

    `;

    olJokeItem.classList.add('list-group-item');

    olJokesList.append(olJokeItem);

}


/**
 * Starter Function of the API
 */
export const init = () => {

    createJokeHTML();
    eventsPage();

}