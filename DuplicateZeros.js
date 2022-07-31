/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
     let arrayLength=arr.length
    for(let i=0; i<arrayLength;i++){
        if(arr[i]===0) {
        arr.splice(i+1,0,0)
        i=i+1
        }
    }
    arr.splice(arrayLength,arr.length)
    return arr
};
