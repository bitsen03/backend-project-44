import readlineSync from 'readline-sync'

const brainProgression = () => {
    console.log('What number is missing in the progression?')
    for(let i = 0; i < 3; i++){
       
      
        const randomNumber2 = Math.floor(Math.random() * 10 + 1)
        let randomNumber3 = Math.floor(Math.random() * 10 + 1)
        
        let rN3 = randomNumber3
        let question = `Question: `
        let progression = `${randomNumber3}`
        let rightAnswer
       
        for  (let z = 0; z <= 10; z++){
            if (z === randomNumber2){
                randomNumber3 += rN3
                rightAnswer = randomNumber3 
                progression += ` ...`
            }
           else { 

            randomNumber3 += rN3
            progression += ` ${randomNumber3}`
           
            }
            
        }
        console.log(`Question: ${progression}`)
        const answer = readlineSync.question('Your answer: ');
        if (answer === String(rightAnswer)) {
            console.log('correct!')
        }
        else {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, Sam!`)
            return
        }
        
    }
}
brainProgression()