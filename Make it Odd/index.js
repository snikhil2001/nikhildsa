// Make it Odd Ended
// Description

// Joey has an array A consists of N integers.

// He can only do one move, he can choose two indices 1≤i,j≤n such that i≠j and set A[i]=A[j] (setting the value of ith value of A to jth value of A).

// He can perform such moves any number of times (possibly, zero). He can choose different indices in different operations, to make the sum of all the numbers odd.

// We need to Help Joey in finding out for given arrays if it is possible to make the sum odd by doing only the move mentioned above.

// If it is possible output 'YES'

// else output 'NO'

// You have to answer T independent test cases.

// Input
// Input Format

// Number of test cases

// Number of values in array

// space separated values for array

// Constraints

// T <= 1000

// N <= 100000

// Output
// Output Format

// YES or NO for all the test cases.

// Sample Input 1

// 2
// 5
// 1 2 3 4 5
// 5
// 2 2 2 2 2
// Sample Output 1

// YES
// NO

// Solution

// if elements are odd and count of odd is odd then sum will be odd
// if count of even and count of odds are equal sum is odd

function solve(n, arr) {
  let even = 0;
  let odd = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] % 2 === 1) {
      odd++;
    } else {
      even++;
    }
  }
  if (even === 0 && odd % 2 === 1) {
    console.log("YES");
    return;
  }
  if (odd === even) {
    console.log("YES");
    return;
  }
  if (even > 0 && odd > 0) {
    console.log("YES");
    return;
  }
  console.log("NO");
}
