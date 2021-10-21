
//Center Place to make requests



const usersURL = 'https://reqres.in/api/users?page=2';

const cloudPreset = 'vgmuzidb';
const cloudURL = 'https://api.cloudinary.com/v1_1/dpry15cmo/upload';


const uploadImage = async( fileToUpload ) => {

    const formData =  new FormData();
    formData.append( 'upload_preset', cloudPreset )
    formData.append( 'file', fileToUpload )

    try {

        const response = await fetch( cloudURL, {

            method: 'POST',
            body: formData
            
        } );

        if( response.ok ) {

            const cloudResponse = await response.json();
            return cloudResponse.secure_url;
            //console.log(cloudResponse);

        } else {

            await response.json();
        }

        return 

    } catch (error) {

        throw error;
        
    }

}

export {
   
    uploadImage
}