
//Center Place to make requests



const usersURL = 'https://reqres.in/api/users?page=2';


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
   
    getUsers
}