

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

        //if ( !response.ok ) throw 'Request can not be Completed!';

        //const { data } = await response.json();

        //return data;

        console.log(await response.json());

    } catch (error) {

        throw error;
        
    }
}

export {
   
    getUser,
    createUser
}