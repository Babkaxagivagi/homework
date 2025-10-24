// -----102lesson--------------1 задание-----------------------//
function stringHello (name){
  return `Hello ${name}`
}
console.log(stringHello('Borik'))
// -----102lesson--------------2 задание-----------------------//
const numbers = [4, 52, 3, 2, 5]
function checkNumbers (array){
  for(let i = 0; i < array.length; i++){
    if (array[i] > 10){
      return (array[i]) 
    }
  }
  return 'Чисел нет'
}
console.log(checkNumbers(numbers))

// -----102lesson--------------3 задание-----------------------//
function calc(num1, num2, operator){
  if (operator === '-'){
    result = num1 - num2
    return result
  } else if(operator === '+'){
      result = num1 + num2
      return result
  } else if(operator === '/'){
      result = num1 / num2
      return result
  } else if(operator === '*'){
      result = num1 * num2
      return result
  }
}

console.log(calc(2,3,'*'))

// -----------------------1 задание-----------------------//
const user = {
  name: 'Ilya',
  age: 19,
  loxIliNet: true,
  sayHello(name){
    console.log(`Hello ${name}`)
  }
}
user.sayHello('Tom')

// -----------------------2 задание-----------------------//
const users = [
  {
    name: 'alex',
    age:23,
    isAdmin: false
  },
  {
    name: 'ilya',
    age:19,
    isAdmin: true
  },
  {
    name: 'sanechka',
    age:8,
    isAdmin: false
  },
  {
    name: 'labuba',
    age:3,
    isAdmin: false
  },
]
let notAdmin = 0
for(let i = 0; i < users.length; i++){
  if(!users[i].isAdmin){
    notAdmin += 1
  }
} 
console.log(notAdmin)