nums = [1, 2, 3, 4, 5];

let sum;

function sumNumbers() {
  sum = nums.reduce(function (a, num) {
    return a + num;
  }, 0);
}
sumNumbers();
console.log(sum);
