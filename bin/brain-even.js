import readlineSync from 'readline-sync';
import { name } from '../src/cli.js'

console.log('Welcome to the Brain Games!')
 function gameRandom() {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    for (let i = 0; i < 3; i++) {
        const randomNumber = Math.floor(Math.random() * 100)
        if (randomNumber % 2 > 0) {
            console.log(`Question: ${randomNumber}`);
            const answer = readlineSync.question('Your answer: ');
            if (answer === 'no') {
                console.log('Correct!');
            }
            else {
                console.log(`${answer} is wrong answer ;(. Correct answer was 'no'. \nLet's try again, ${name}!`);
                return;
            }

        }
        else if (randomNumber % 2 === 0) {
            console.log(`Question: ${randomNumber}`);
            const answer = readlineSync.question('Your answer: ');
            if (answer === 'yes') {
                console.log('Correct!');
            }
            else {
                console.log(`${answer} is wrong answer ;(. Correct answer was 'yes'. \nLet's try again, ${name}!`);
                return;
            }
        }
        
    }
    console.log(`Congratulations, ${name}!`)
}
gameRandom()