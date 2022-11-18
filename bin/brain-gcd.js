import readlineSync from 'readline-sync'
const greatestCommonDivisor = () => {
console.log('Find the greatest common divisor of given numbers.')
let result 
const arr1 = []
const arr2 = []
let rightAnswer

for (let i = 0; i < 3; i += 1){
    let randomNumber1 = Math.floor(Math.random() * 100)
    let randomNumber2 = Math.floor(Math.random() * 100)

    console.log(`Question: ${randomNumber1} ${randomNumber2}`)

    const answer = readlineSync.question('Your answer: ');

for (let z = 0; z <= randomNumber1; z += 1) {
   
if (randomNumber1 % z === 0){

arr1.push(z)
if (z === randomNumber1) {
    arr1.push('r')
}

}
}
for (let j = 0; j <= randomNumber2; j += 1) {
    
if (randomNumber2 % j === 0){

arr2.push(j)
if (j === randomNumber2) {
    arr2.push('r')
}

}
}
console.log('arr1 ' + arr1)
console.log('arr2 ' + arr2)
const filterArr = arr1.filter((x) => arr2.includes(x));
console.log(filterArr)
for (let k = 0; k < filterArr.length; k++ ) {
    if (filterArr[k] === 'r') {
       
        rightAnswer = filterArr[k - 1]
     
    }
}

// console.log('arr1 ' + arr1)
// console.log('arr2 ' + arr2)
// console.log(filterArr)
// console.log(rightAnswer)
if (answer === String(rightAnswer)) {
    console.log('correct!')
}
else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, Sam!`)
    return
}

}
// const filterArr = arr1.filter((x) => arr2.includes(x));
// console.log(filterArr)
// for (let i = 0; i < filterArr.length; i++ ) {
//     if (filterArr[i] === 'r') {
//        rightAnswer = filterArr[i - 1]
     
//     }
  
// }


}
greatestCommonDivisor()
