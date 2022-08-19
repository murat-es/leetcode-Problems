/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let count=0
    
    for(let i=0; i<nums.length; i++){
        let order=1
        while(nums[i]>=10){
            order++
            nums[i]/=10
        }
        if(order%2===0){
            count++
        }
    }
    return count
};
