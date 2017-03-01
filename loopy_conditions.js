/**
 * Create a function called 'greaterNumber'
 * This function will take in 2 Parameters.
 * You need to check which number is greater and return that number
 * @param  { Number } a
 * @param  { Number } b
 * @return { Number }
 */

function greaterNumber(a, b) {
  if (a > b){
    // console.log('a',a);
    return a;
  }else{
    // console.log('b',b);
    return b;
  }
}

greaterNumber(1,5);

/**
 * Create a function called 'stringOfNumbers'.
 * This function will take in 1 parameter
 * Your task is to add all the numbers in between 0 and n
 * For example if the number is 10 then the function should return:
 * "0,1,2,3,4,5,6,7,8,9,10"
 * @param  { Number } n
 * @return { String }
 */

 function stringOfNumbers(n) {
   var number;
   var array = [];
   for (var i = 0; i < n; i++) {
    // console.log('i',i);
    // console.log('array.push(i)',array.push(i));
    array.push(i);
   }
   // console.log('array',array.join(''));
   return array.join('');
 }

stringOfNumbers(10);
/**
 * Create a function called 'sumOfArray'.
 * This function will take in a parameter that is an array.
 * Your task is to take the array and return the sum of all the numbers in the array.
 * You must check if the item in the array is a number
 * @param  { array } arr
 * @return { Number }
 */

function sumOfArray(array) {
  //filter to find the values that are numbers
      //Push values into a new array
  //reduce the array into the sum
  //return the sum of the newArray

  // console.log('array',array);
  var newArray = [];
  // val ==+ val is also isFinite(val)
  array.filter(function(val) {
    // console.log('val ==+ val',val ==+ val);
    if(isFinite(val)){
      // console.log('val',val);
      newArray.push(val);
    }
  });
  // console.log('newArray',newArray);
  var sum = newArray.reduce(function(acc,idx) {
    return acc + idx;
  });
  // console.log('sum',sum);
  return sum;
}

sumOfArray([1,2,3,4,5]);
sumOfArray([1,2,'Love',9]);
/**
 * Create a function called 'getEvens'.
 * This function will take in a parameter that is an array.
 * Your task is to take the array and return all the even numbers in a new array.
 * @param  { array } arr
 * @return { array }
 */

function getEvens(array) {
  var newArray = [];
  array.filter(function(val) {
    // console.log('i', (val%2) === 0);
    // console.log('val',val);
    if((val % 2) === 0 ){
      // console.log('pushed value',newArray.push(val));
      return newArray.push(val);
    }
  });
  // console.log('newArray',newArray);
  return newArray;
}

getEvens([1,2,4,8,7]);
/**
 * Create a function called 'getOdds'.
 * This function will take in a parameter that is an array.
 * Your task is to take the array and return all the odd numbers in a new array.
 * @param  { array } arr
 * @return { array }
 */

function getOdds(array) {
  var newArray = [];
  array.filter(function (val) {
    console.log('is',(val % 2) === 1);
    if((val % 2) === 1){
      console.log('val',val);
      return newArray.push(val);
    }
  });
  console.log('newArray',newArray);
  return newArray;
}

getOdds([2,1,9,4,6,7]);
/**
 * Create a function called 'calculate'.
 * This function will take in 3 parameters:
 * The first parameter is a number.
 * The second parameter is a number.
 * The third param is a string that will be 'add', 'subtract', 'multiply', 'divide'.
 * Your task is to do a mathematical operation on the 2 numbers based on the third parameter.
 * The function should return the string "Invalid operator" if the operator is
 * not 'add', 'subtract', 'multiply', 'divide'.
 * @param  { Number } int1
 * @param  { Number } int2
 * @param  { String } operator ('add', subtract, 'multiply', 'divide')
 * @return { Number/String }
 */
function calculate(a, b, operator) {
  switch (operator){
    case 'add':
      return a + b;
    case 'subtract':
      if(a < b){
        return a - b;
      }else{
        return  b - a;
      }
      break;
    case 'multiply':
      return a * b;
    case 'divide':
      return a / b;
    default:
      return 'Invalid operator';
  }
}

calculate(1,5, 'add');