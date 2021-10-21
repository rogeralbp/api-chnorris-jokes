
import "@babel/polyfill";


import * as CRUD from './js/crud-provider';

// CRUD.getUser(2).then( console.log );

// CRUD.createUser({
//     name: 'Roger',
//     job: 'Software-Engineer'
// });

// CRUD.updateUser( 1 , {
//     name: 'Osvaldo',
//     job: 'Soccer-Player'
// }).then(console.log);

CRUD.deleteUser( 1 ).then(console.log);
