/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let jew=jewels.split("")
    let sto=stones.split("")
    
    let count=0
    for(let i=0;i<jew.length; i++){
        count+=sto.filter(x => x === jew[i]).length
    }
    
    return count
};
