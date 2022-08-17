/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    num=num.toString()
    
    for(let i=0; i<num.length; i++){
        if(num[i]==="6"){
            num=num.substring(0,i)+"9"+num.substring(i+1)
            break
        }
    }
    return parseInt(num)
};
