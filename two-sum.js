/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
/*
* 思路，利用2次for循环遍历数组，如果有2个数加起来等于目标值，则把这两个数所在的index存起来
* */
var twoSum = function (nums, target) {
  var len = nums.length;
  var pairArr = [];

  for (var i = 0; i < len; i++) {
    for (var j = 0; j < len; j++) {
      if (nums[i] + nums[j] === target) {
        if((i!==j) && (pairArr.indexOf(i)===-1)&&(pairArr.indexOf(j)===-1)){
          pairArr.push(i, j);
        }
      }
    }
  }
  return pairArr;
};
console.log(twoSum([3, 3], 6));