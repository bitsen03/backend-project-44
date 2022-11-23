import readlineSync from 'readline-sync';

export default function gameRandom() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = Math.floor(Math.random() * 100);
    if (randomNumber % 2 > 0) {
      console.log(`Question: ${randomNumber}`);
      const answer = readlineSync.question('Your answer: ');
      if (answer === 'no') {
        console.log('Correct!');
      } else {
        console.log(`${answer} is wrong answer ;(. Correct answer was 'no'. \nLet's try again, ${name}!`);
        return;
      }
    } else if (randomNumber % 2 === 0) {
      console.log(`Question: ${randomNumber}`);
      const answer = readlineSync.question('Your answer: ');
      if (answer === 'yes') {
        console.log('Correct!');
      } else {
        console.log(`${answer} is wrong answer ;(. Correct answer was 'yes'. \nLet's try again, ${name}!`);
        return;
      }
    }
  }
  console.log(`Congratulations, ${name}!`);
}
export { gameRandom };
