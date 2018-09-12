/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    // 思路：构建正则，匹配每一个宝石在石头数组中出现的个数。这里有两个知识点比较重要，正则对象和match方法
    var j_array = J.split('');
    var count = 0;
    j_array.forEach(item=>{
	    var regx = new RegExp(item, 'g');
        if(S.match(regx)){
            count+=S.match(regx).length;
        }
	    
    });
    return count;
};
