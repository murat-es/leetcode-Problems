/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function(s) {
    let count=0
    let onBarPair=true
    
    for(let i=0; i<s.length; i++){
        if(onBarPair && s.charAt(i)==="*") count++
        if(s.charAt(i)==="|") onBarPair=!onBarPair
    }
    return count
};
