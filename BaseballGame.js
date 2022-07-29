/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
    let arr=[] 
    
    for(let i=0;i<ops.length ;i++) {
     if(ops[i]==="C") {
      arr.pop() 
     } 
      else if(ops[i] ==="D") {
        arr.push(arr[arr.length-1]*2)  
         }
        
         else if(ops[i] ==="+") {



        arr.push(arr[arr.length-1]+arr[arr.length-2])  

         }else {
            arr.push(parseInt(ops[i])) 
            } 

    } 
    let sum = 0;

for (let i = 0; i < arr.length; i++) {

    sum += arr[i];

}
    return sum
};
