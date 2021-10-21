
import { uploadImage } from './http-provider'

const body = document.body;

let inputFile, imgPhoto;

const createInputFileHTML = () => {

    const html = 
    `
    <h1 class="mt-5">Upload Files</h1>

    <hr>

    <label for="">Select a File</label>

    <input type="file" name="" id="" accept="image/png, image/jpeg">

    <br>

    <img id="photo" class="img-thumbnail" src="">

    ` ;

    const div = document.createElement('div');
    div.innerHTML = html;

    body.append(div)

    inputFile = document.querySelector('input');
    imgPhoto = document.querySelector('#photo');

}


const events = () => {

    inputFile.addEventListener('change', (event) => {

        const file = event.target.files[0];
        uploadImage(file).then( url => imgPhoto.src = url );

        alert('File upload Succesfully!');

    } );
}

export const init = () => {
    createInputFileHTML();
    events();
}