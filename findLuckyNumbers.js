// Write your code below this line.
function findLuckyNumbers(n) {
  let luckyNumbers = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      luckyNumbers.push(i);
    }
  }
  return luckyNumbers;
}