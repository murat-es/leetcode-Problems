/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let axisX=0
    let axisY=0
    
    for(let i=0; i<moves.length; i++){
    switch(moves.charAt(i)) {
        case "U":
        axisY+=1
        break;
                
        case "D":
        axisY-=1
        break;
                
        case "L":
        axisX-=1
        break;
                
        case "R":
        axisX+=1
        break;
        }
    }
    return axisX===0 && axisY===0
};
