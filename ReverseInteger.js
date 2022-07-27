/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    num=x.toString()
    
    newString=""
    for(let i=num.length; i>=0;i--){
        newString+=num.charAt(i)
    }
    if(parseInt(newString) < 2**31) {
        parseInt(newString)
    }
    return x<0 
        ? (parseInt("-"+newString) > Math.pow(-2,31)  && parseInt("-"+newString))
        : (parseInt(newString) < Math.pow(2,31)-1  && parseInt(newString))
};
