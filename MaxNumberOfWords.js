/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let max=0
    
    for(let i=0; i<sentences.length; i++){
        if(max<sentences[i].split(" ").length){
            max=sentences[i].split(" ").length;
        }
    }
    return max
};
