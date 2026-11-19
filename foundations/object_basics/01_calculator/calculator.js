const add = function(a,b) {
	return a + b
};

const subtract = function(a,b) {
	return a - b
};

const sum = function(arr) {
	if (arr === undefined || arr.length === 0) {return 0} 
  
  else return arr.reduce((sum, item) => {return sum + item})
};

const multiply = function(arr) {
return arr.reduce((sum, item) => {return sum * item})
};

const power = function(base,exponent) {
	
  return base**exponent

};

const factorial = function(a) {
	//from 1 to a, multiply everything
   let starter = 1
  if (a === 0){return 1}
  
  
  else {
      for (i=1; i<=a ;i++){
        starter = i* starter
      }
      return starter
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
