// https://coderbyte.com/editor/Find%20Intersection:JavaScript

// Find Intersection
// Have the function FindIntersection(strArr) read the array of strings stored in strArr which will contain 2 elements: the first element will represent a list of comma-separated numbers sorted in ascending order, the second element will represent a second list of comma-separated numbers (also sorted). Your goal is to return a comma-separated string containing the numbers that occur in elements of strArr in sorted order. If there is no intersection, return the string false.
// Examples
// Input: ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]
// Output: 1,4,13
// Input: ["1, 3, 9, 10, 17, 18", "1, 4, 9, 10"]
// Output: 1,9,10

function FindIntersection(strArr) { 

  // code goes here  
  const arr0 = strArr[0].split(", ");
  const arr1 = strArr[1].split(", ");
  const arr0Counts = {};
  let result = "";
  for (num of arr0) {
    arr0Counts[num] = (arr0Counts[num] + 1) || 1;
  }
  // console.log("COUNTS: ", arr0Counts);
  for (num of arr1) {
    if (arr0Counts[num] !== undefined) {
      if (arr0Counts[num] > 0) {
        result = `${result}${num.toString()},`;
        // console.log("RESULT: ", result);
        arr0Counts[num] -= 1;
      }
    }
    if (arr0Counts[num] === 0) {
      delete arr0Counts[num];
    }
  }
  if (!result.length) return false;

  result = result.slice(0,result.length - 1);
  // console.log("RESULT: ", result, typeof result);
  return result;
}

// keep this function call here 
console.log(FindIntersection(readline()));