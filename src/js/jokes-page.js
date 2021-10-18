
import { getJoke } from './http-provider'

const body = document.body;
let btnOtherJoke , olJokesList;

const createJokeHTML = () => {

    const html = 
    `
    <h1 class="mt-5">Jokes</h1>
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

        drawJoke( await getJoke() );

    });

}


const drawJoke = ( joke ) => {

    const olJokeItem = document.createElement('li');

    olJokeItem.innerHTML = `<b> ${joke.id} </b> : ${joke.value}`;

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