const palindromes = function (a) {
let array = a.split("")
let copy = [...array]
let reversed = copy.reverse()

function remove(str) { 
    return str.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, '');
};

let cleanCopy = remove(array.toString());
let cleanReversed = remove(reversed.toString())

function neat(str){
    return str.replace(/ /g, "")
};

if ( neat(cleanCopy).toLowerCase() == neat(cleanReversed).toLowerCase()){
    console.log(array, reversed)
    return true
}
else return false

};
// Do not edit below this line
module.exports = palindromes;
