import readlineSync from 'readline-sync' 
const prime = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
    for (let i = 0; i < 3; i++ ){
        let rightAnswer
        const arr = []
        const randomNumber1 = Math.floor(Math.random() * 100 + 1)
        for (let z = 0; z <= randomNumber1; z++ ){
          if (randomNumber1 % z === 0){
arr.push(z)
          }  
        }
        
        if (arr.length === 2){
            rightAnswer = 'yes'
        }
        else {
            rightAnswer = 'no'
        }
        console.log('Answer "yes" if given number is prime. Otherwise answer "no".')
        console.log(`Question: ${randomNumber1}`)
        
        const answer = readlineSync.question('Your answer: ');
        
        if (rightAnswer === answer){
            console.log('Correct!')
          }
          else {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'. \nLet's try again, ${name}!`)
            return
          }

    }
    console.log(`Congratulations, ${name}!`)
}
export { prime }
