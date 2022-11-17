import readlineSync from 'readline-sync'
const greatestCommonDivisor = () => {
console.log('Find the greatest common divisor of given numbers.')
let result 
const arr1 = []
const arr2 = []
let counter = 0
for (let i = 0; i < 3; i += 1){
    let randomNumber1 = 20
    let randomNumber2 = 10
    // let randomNumber1 = Math.floor(Math.random() * 100)
    // let randomNumber2 = Math.floor(Math.random() * 100)
    console.log(`Question: ${randomNumber1} ${randomNumber2}`)
    const answer = readlineSync.question('Your answer: ');
for (let z = 1; z < 10; z += 1) {
   
   
if (randomNumber1 % z === 0){
randomNumber1 /= z
arr1.push(z)
counter += 1 
}
}
for (let j = 1; j < 10; j += 1) {
    
   
if (randomNumber2 % j === 0){
randomNumber2 /= j
arr2.push(j)
}

}
}
console.log(counter)
}
greatestCommonDivisor()
//100