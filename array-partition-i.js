/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
  var newArr = nums.sort(function (a,b) {
    return a-b;
  });
  var i = 0;
  var len = nums.length;
  var sum = 0;
  for(i; i<len;i+=2){
    sum+=newArr[i];
  }
  return sum;
};

console.log(arrayPairSum([1,1,2,2]));