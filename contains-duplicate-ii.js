/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  var temp_array = nums.slice(0);
  var sorted_array = temp_array.sort((a,b)=>a-b);
  var duplicated_number;
  for(var i =0;i<nums.length;i++){
    if(sorted_array[i]===sorted_array[i-1]){
      duplicated_number = sorted_array[i];
      break;
    }
  }
  var index_array = [];
  nums.forEach((item,index)=>{
    if(item===duplicated_number){
      index_array.push(index)
    }
  });

  for(var i = 0;i<index_array.length;i++){
    for(var j = i; j<index_array.length;j++){
      if((Math.abs(j-i)<=k)){
        return true;
      }
    }

  }
  return false;
};

// console.log()