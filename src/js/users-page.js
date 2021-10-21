
import { getUsers } from './http-provider'


const body      = document.body;
let tableBody;
let corretaletiveId;

const createHTML = () => {
    
    const html = `
    <h1 class="mt-5"> Users CRUD </h1>

    <table class="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Email</th>
                <th scope="col">Name</th>
                <th scope="col">Avatar</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    </table>
    `;

    const div = document.createElement('div');
    div.innerHTML = html;
    body.appendChild( div );

    tableBody = document.querySelector('tbody');

}

const createRowUser = ( user ) => {

    corretaletiveId++;

    const html = `
        <td scope="col"> ${ corretaletiveId } </td>
        <td scope="col"> ${ user.email } </td>
        <td scope="col"> ${ user.first_name } ${ user.last_name } </td>
        <td scope="col">
            <img class="img-thumbnail" src="${ user.avatar }">
        </td>
    `;

    const tr = document.createElement('tr');
    tr.innerHTML = html;

    tableBody.appendChild(tr);

}


export const init = async() => {

    createHTML();

    corretaletiveId = 0;

    const users = await getUsers();

    for (const user of users){

        createRowUser(user);
        
    }

}

