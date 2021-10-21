
//Center Place to make requests


const jokesURL = 'https://api.chucknorris.io/jokes/random';
const usersURL = 'https://reqres.in/api/users?page=2';

const getJoke = async() => {

    try {

        const response = await fetch( jokesURL );

        if ( !response.ok ) throw 'Request can not be Completed!';

        const { icon_url, id, value } = await response.json();

        return { icon_url, id, value };


    } catch (error) {

        throw error;
        
    }
   

}

const getUsers = async() => {

    try {

        const response = await fetch( usersURL );

        if ( !response.ok ) throw 'Request can not be Completed!';

        const { data:users } = await response.json();

        return users;

    } catch (error) {

        throw error;
        
    }

}

export {

    getJoke,
    getUsers
}