/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    let newString=[...s]
    
    for(let i=0; i<s.length; i++){
        newString[indices[i]]=s[i]
    }
    
    return newString.join("")
};
