/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    let allWord1=""
    let allWord2=""
    
    word1.forEach(e=>allWord1+=e)
    word2.forEach(e=>allWord2+=e)
    
    return allWord1===allWord2
};
