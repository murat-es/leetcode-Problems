/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
   let arr=s.split(" ")
  
  for(let i=arr.length-k; i>0; i--){
  	arr.pop()
  }

    return arr.join(" ")
};
