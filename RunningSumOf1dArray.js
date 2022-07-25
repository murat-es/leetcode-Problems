/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
     newArray=[]
    j=0
    
    for(let i=0; i<nums.length ; i++){
        j+=nums[i]
        newArray[i]=j
    }
    return newArray
};
