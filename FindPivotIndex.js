/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let left=0
    let right= nums.reduce((partialSum, a) => partialSum + a, 0);
    
    for(let i=0,j=nums.length-1; i<nums.length; i++,j--){
        if(i>0){
        left+=nums[i-1]
        }        
        right-=nums[i]
        
        if(left===right){
            return i
        }
    }
    return -1
};
