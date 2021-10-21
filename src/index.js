
import "@babel/polyfill";


//import { init } from './js/jokes-page'
import { getUsers } from './js/http-provider'

getUsers().then(console.log);