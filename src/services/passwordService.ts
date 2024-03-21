
export default function generatePass(){
    let password: string = '';
    let characteres: string = 'Aa$@#123456789abcdefghijFGHIJKLMNOP!';
    let passWordLenght = 8;

    for(let index =0; index < passWordLenght; index++){
        password += characteres.charAt(
        Math.floor(Math.random() * characteres.length))

    }

    return password;

}