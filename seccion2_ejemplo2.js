const name = 'Fernando';
let age = 29;
const hobbies = false;

age = 30;

function summarizeUser(userName, userAge, userHasHobby){
    return(
        'El nombre es ' +
        userName +
        ' y su edad ' +
        userAge + 
        
        (userHasHobby ? ' tiene hobbies' : ' no tiene hobbies')
    );
}

console.log(summarizeUser(name, age, hobbies));