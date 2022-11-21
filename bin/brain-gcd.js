import readlineSync from 'readline-sync'
 const gcd = () => {
for (let i = 0; i < 3; i++){
    const arr1 = []
    const arr2 = []
    let randomNumber1 = Math.floor(Math.random() * 100)
    let randomNumber2 = Math.floor(Math.random() * 100)

    console.log(`Question: ${randomNumber1} ${randomNumber2}`)

    const answer = readlineSync.question('Your answer: ');

    for (let z = 0; z <= randomNumber1 ; z++){
        if (randomNumber1 % z === 0){

arr1.push(z)

        }
    }
    for (let x = 0; x <= randomNumber2 ; x++){
        if (randomNumber2 % x === 0){
    
    arr2.push(x)
    
        }
    }

    const filterArr = arr1.filter((x) => arr2.includes(x));
    
    
    const rightAnswer = filterArr[filterArr.length - 1]
    if (answer === String(rightAnswer)) {
        console.log('correct!')
    }
    else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, Sam!`)
        return
    }
    
    }
  
    
}
export { gcd }




