
import "@babel/polyfill";


import * as CRUD from './js/crud-provider';

CRUD.getUser(2).then( console.log );
CRUD.createUser({
    name: 'Roger',
    job: 'Software-Engineer'
});