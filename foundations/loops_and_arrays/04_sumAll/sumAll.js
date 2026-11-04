const sumAll = function(a,b) {
    
    function isString(variable) {
  return typeof variable === "string";
}
function isArray(variable) {
    return typeof variable === "object"
}

    if (a < 0 || b < 0) { return "ERROR"}
    if (isString(a)=== true || isString(b)===true){ return "ERROR"}
    if (a%1!=0 || b%1!=0){return "ERROR"} 
    if(isArray(a)=== true || isArray(b)=== true ){ return "ERROR"}
    
    let arr = []
    if (b>a){
        for (i=a;i<=b;i++){
            arr.push(i)}
        }
    if (b<a){
        for (i=b;i<=a;i++){
            arr.push(i)
        }
    }
let sum = 0;
for (let i=0; i<arr.length; i++){
    sum += arr[i]}

return sum
};

// Do not edit below this line
module.exports = sumAll;
