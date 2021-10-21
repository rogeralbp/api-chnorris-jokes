

const urlCRUD = 'https://reqres.in/api/users';

const getUser = async( id ) => {

    try {

        const response = await fetch( `${urlCRUD}/${id} ` );

        if ( !response.ok ) throw 'Request can not be Completed!';

        const { data } = await response.json();

        return data;

    } catch (error) {

        throw error;
        
    }

}

const createUser = async( user ) => {

    try {

        const response = await fetch( urlCRUD, {

            method: 'POST',
            body: JSON.stringify( user ),
            headers: {

                'Content-Type': 'application/json'
            }
        } );

        return await response.json();

    } catch (error) {

        throw error;
        
    }
}

const updateUser = async( id , user ) => {

    try {

        const response = await fetch( `${urlCRUD}/${id} `, {

            method: 'PUT',
            body: JSON.stringify( user ),
            headers: {

                'Content-Type': 'application/json'
            }
        } );

        return await response.json();

    } catch (error) {

        throw error;
        
    }
}

const deleteUser = async( id  ) => {

    try {

        const response = await fetch( `${urlCRUD}/${id} `, {

            method: 'DELETE'

        } );

        return ( response.ok ) ? 'Deleted' : 'Resource can not be Deleted' ;

    } catch (error) {

        throw error;
        
    }
}

export {
   
    getUser,
    createUser,
    updateUser,
    deleteUser
}