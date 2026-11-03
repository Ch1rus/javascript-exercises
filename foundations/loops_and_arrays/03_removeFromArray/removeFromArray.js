
//Two arguments, arr, and the one value you are removing, so filter, not the position.


const removeFromArray = function(arr,...b) { //b is an array now

    function removed(number){ //gives a boolean
        let check = b.includes(number) //checks whether b is included in number? what is number?

       
        return !check //returns opposite boolean
    }

    return arr.filter(removed) //filters for whatever is false, shouldn't that then not print anything?
};

//if arr.includes(b) = true 

//return number != b

// Do not edit below this line
module.exports = removeFromArray;
