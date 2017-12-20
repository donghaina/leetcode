/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  var array = String(x).split('');
  if (array[0] === '-') {
    var numa = Number(array.slice(1).reverse().join(''));
    if (numa > Math.pow(2, 31)) {
      return 0;
    } else {
      return Number(array[0] + numa);
    }
  } else {
    var numb = Number(array.reverse().join(''));
    if(numb > Math.pow(2, 31)){
      return 0
    }else {
      return numb;
    }
  }
};

console.log(reverse(123));