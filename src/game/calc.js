import readlineSync from 'readline-sync'; 

function gameCalc() {

  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`)
    const signs = ['-', '+',  '*']
    console.log('What is the result of the expression?');
 
    for (let i = 0; i < 3; i++) {
        const randomSign = Math.floor(Math.random() * signs.length)
        const randomNumber1 = Math.floor(Math.random() * 10)
        const randomNumber2 = Math.floor(Math.random() * 10)
        let result
    console.log(`Question: ${randomNumber1} ${signs[randomSign]} ${randomNumber2}`)
    const answer = readlineSync.question('Your answer: ');
    if (signs[randomSign] === '-'){
      result = randomNumber1 - randomNumber2
      if (String(result) === answer){
        console.log('Correct!')
      }
      else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'. \nLet's try again, ${name}!`)
        return
      }
    }
    else if (signs[randomSign] === '+'){
        result = randomNumber1 + randomNumber2
        if (String(result) === answer){
            console.log('Correct!')
          }
          else {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'. \nLet's try again, ${name}!`)
            return
          }
      }
      else if (signs[randomSign] === '*'){
        result = randomNumber1 * randomNumber2
        if (String(result)  === answer){
            console.log('Correct!')
          }
          else {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'. \nLet's try again, ${name}!`)
            return
          }
      }
}
console.log(`Congratulations, ${name}!`)
}
export { gameCalc }