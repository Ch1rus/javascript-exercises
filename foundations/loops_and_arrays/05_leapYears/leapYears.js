const leapYears = function(x) {
    const nah = false 
    const yeah = true

    if (x % 400 === 0){
        return yeah
    }
    if (x%100 !==0 && x%4 === 0 ){
        return yeah
    }
    else return nah

};

// Do not edit below this line
module.exports = leapYears;
