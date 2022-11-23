import readlineSync from 'readline-sync';

export default function gcd() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < 3; i += 1) {
    const arr1 = [];
    const arr2 = [];
    const randomNumber1 = Math.floor(Math.random() * 100);
    const randomNumber2 = Math.floor(Math.random() * 100);

    console.log(`Question: ${randomNumber1} ${randomNumber2}`);

    const answer = readlineSync.question('Your answer: ');

    for (let z = 0; z <= randomNumber1; z += 1) {
      if (randomNumber1 % z === 0) {
        arr1.push(z);
      }
    }
    for (let x = 0; x <= randomNumber2; x += 1) {
      if (randomNumber2 % x === 0) {
        arr2.push(x);
      }
    }

    const filterArr = arr1.filter((x) => arr2.includes(x));

    const rightAnswer = filterArr[filterArr.length - 1];
    if (answer === String(rightAnswer)) {
      console.log('correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
}
