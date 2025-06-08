const maxNumber = prompt("Enter the maximum value");
console.log(`The maximum value is: ${maxNumber}`);

let hint;

let randomNumber = (Math.floor(Math.random()*maxNumber)+1);

let guessNumber = prompt("Please guess the number");
while(true)
{
        if(guessNumber == "quit"){
            console.log("User quit the game");
            break;
        }
        if(guessNumber == randomNumber){
            console.log(`Congratulations!Your guess was right.The random number was ${randomNumber}`);
            break;
        }
    else
    {
        if(guessNumber<randomNumber){
            guessNumber = prompt("Please guess number . Try large number");
        }
        else if(guessNumber>randomNumber){
            guessNumber = prompt("Please guess number . Try small number");
        }
    }
}