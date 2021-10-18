
//Center Place to make requests


const jokesURL = 'https://api.chucknorris.io/jokes/random';

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

export {

    getJoke
}