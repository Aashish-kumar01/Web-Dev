
const max = prompt("Enter maximum number.");

alert("Guess number less than " +max);

const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("Guess the number.");

while(true){

    if(guess == "quit"){
        alert("You Quit the Game.random number is " +random);
        break;
    }
    else if(guess == random){
        alert("Congrats! You won");
        break;
    }
    else if(guess >= random){
        guess = prompt("Hint! You guessed large number.");
    }
    else if(guess <= random){
        guess = prompt("Hint! You guessed small number");
    }
}