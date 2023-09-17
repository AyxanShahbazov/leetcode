/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(int) {
    return int.toString(2).replaceAll("0", "").length;    
};