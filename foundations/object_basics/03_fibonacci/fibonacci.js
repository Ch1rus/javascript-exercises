const fibonacci = function(n) {
// it shall give the nth term of the succ
    if (n <= 0 || !Number.isInteger(n) ){
        return "OOPS"
    }
else {
  const sqrtOf5 = Math.sqrt(5)
const goldenRatio = (1 + sqrtOf5)/2
const binetsFormula = (n) => {
return ((goldenRatio**n) - (-goldenRatio)**(-n))/sqrtOf5
  }
  return Math.round(binetsFormula(n))
}
};

// Do not edit below this line
module.exports = fibonacci;
