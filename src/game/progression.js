import readlineSync from 'readline-sync';

export default function brainProgression() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What number is missing in the progression?');
  for (let i = 0; i < 3; i += 1) {
    const randomNumber2 = Math.floor(Math.random() * 10 - 1);
    
    let randomNumber3 = Math.floor(Math.random() * 10 );

    const rN3 = randomNumber3;

    let progression = ``;
    let rightAnswer;

    for (let z = 0; z < 10; z += 1) {
      if (z === randomNumber2) {
        randomNumber3 += rN3;
        rightAnswer = randomNumber3;
        progression +=  ` ..`;
      } else {
        randomNumber3 += rN3;
        progression += ` ${randomNumber3}`;
      }
    }
    console.log(`Question: ${progression}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === String(rightAnswer)) {
      console.log('correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
}
export { brainProgression };
