import readlineSync from 'readline-sync';

 export function name () {readlineSync.question('May I have your name? ');}
 export function cli ()
 {console.log('Welcome to the Brain Games!')
 const name = readlineSync.question('May I have your name? ');
 console.log(`Hello, ${name}!`)}