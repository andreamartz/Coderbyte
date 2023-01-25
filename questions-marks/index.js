// https://coderbyte.com/editor/Questions%20Marks:JavaScript

// Questions Marks
// Have the function QuestionsMarks(str) take the str string parameter, which will contain single digit numbers, letters, and question marks, and check if there are exactly 3 question marks between every pair of two numbers that add up to 10. If so, then your program should return the string true, otherwise it should return the string false. If there aren't any two numbers that add up to 10 in the string, then your program should return false as well.

// For example: if str is "arrb6???4xxbl5???eee5" then your program should return true because there are exactly 3 question marks between 6 and 4, and 3 question marks between 5 and 5 at the end of the string.
// Examples
// Input: "aa6?9"
// Output: false
// Input: "acc?7??sss?3rr1??????5"
// Output: true


// Facts:
  // the ?s don't have to be consecutive

// Questions:
// "ar6???1xxx4" => true??


// OLD:
// for each character in the string, create an entry in the object if the char is a digit or a question mark ('?')

// result will look like this:
// { 
//   6: [2],
//   '?': [3],
//   9: [4]
// }

// for each key in the object:
  // find the addend needed to sum to 10
  // check if the 
// END OLD


// Edge cases:
   // "" --> false          // empty string input
   // "?" -->  false        // string is length 1
   // "a???b" --> false     // input string contains no digits 
   // "1???"  --> false     // input string contains only one digit
   // "1???9?1"  --> false  // input string contains an odd number of digits

// Two pointers plan (slow and fast):
   // create a new string with the non-digit and non-question mark characters filtered out
   // create variable count to count the "?"s
   // find the first digit
      // both pointers will start at this index
      // if there are no digits, return false
   // while fast pointer index is still within the string:
      // if (str[fast] === '?') {
        // count += 1;
      // }
      // if ((parseInt(str[fast]) is a digit) {
        // if (sum of str[slow] and str[fast] is 10) {
          // if (count < 3) {
            // return false
          // }
          // count = 0
        // }
      // }
      // fast += 1

  function QuestionsMarks(str) { 

    // code goes here  
    let stripped = "";
    let qMarks = 0;
    const digitRegex = /[0-9]/;
    const qMarkRegex = /[?]/;
    const digitQMarkRegex = /[0-9?]/;
    
    // create a new string with the non-digit and non-question mark characters filtered out
    for (let char of str) {
      if (digitQMarkRegex.test(char)) {
        stripped = stripped + char;
      }
    }
    const firstDigitIdx = stripped.search(digitRegex);
        // if no digits, return false
    if (firstDigitIdx === -1) return false;

    // stripped should start with a digit
    stripped = stripped.slice(firstDigitIdx);
    
    // if string is empty or length 1 return false;
    if (stripped.length < 2) return false;

    let slow = 0;
    let fast = 1;
    let result = false;
    while(fast < stripped.length) {
      if (stripped[fast] === '?') {
        qMarks += 1;
      }
      if (digitRegex.test(parseInt(stripped[fast]))) {
        if (parseInt(stripped[slow]) + parseInt(stripped[fast]) === 10) {
          if (qMarks < 3) {
            result = false;
            return result;
          }
          result = true;
          qMarks = 0
          slow = fast;
        }
      }
      fast += 1
    }
    return result;
  }
   
// keep this function call here 
// console.log(QuestionsMarks(readline()));

console.log(QuestionsMarks("acc?7??sss?3rr1??????5"));  // true
console.log(QuestionsMarks("aa6?9")); // false
console.log(QuestionsMarks(""));  // false
console.log(QuestionsMarks("?"));  // false
console.log(QuestionsMarks("a???b"));  // false
console.log(QuestionsMarks("1???"));  // false
console.log(QuestionsMarks("1???9?1"));  // false

    // const regex2 = /[0-9]/;
    // const regex3 = /[0-9]???/;
    // // set the pointers equal to the index of the first digit
    // let ptr1 = str.search(regex2);
    // if (ptr1 === -1) return false
    // let ptr2 = ptr1;
    // const start = ptr1;
  
    // for (let i = start; i < str.length; i += 1) {
    //   // if the four-char string starting at ptr1 is a digit followed by three ?s
    //   if (str[i] regex3.test(str.slice(ptr1, ptr1 + 4))) {
    //     ptr1 += 1;
    //     continue;
    //   }
    // }