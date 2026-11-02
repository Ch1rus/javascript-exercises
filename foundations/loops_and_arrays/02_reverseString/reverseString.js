//My idea is that you turn it into an array with each char for each index and do something like splice() 
//where theres a function that looks for whatever the current index is, and takes off the current index from the whole array.

//So, if it's number 0, and the whole array is 30, then 30-0, which is thirty. If it's 20, then 30-20, which would effectively be the other third.
//W! **I PROBABLY ALSO NEED SOMETHING THAT TAKES OFF THE COPIED CHARS** maybe I can just move them? => nope ; arr.splice(new_index, 0, arr.splice(old_index, 1)[0])?????
//The idea with split("") works, spaces are counted as a character.
//NO, NO SPLICE, YOU JUST ASSIGN VALUES, MUCH EASIER, REMEMBER TO TRY EASIER SOLUTIONS, MANAGING THE ARRAY WAS IMPOSSIBLE AS IT KEPT INCREASING

const reverseString = function(yesSir) {

let arr =  yesSir.split("") //an array containing each individual character
  
function arrayIndexCalc(){
    

   
    for (let i = 0; i < Math.floor(arr.length/2); i++ ){
      let temp = arr[arr.length - 1 - i]; //the last item is temp
      arr[arr.length - 1 - i] = arr[i];//the last item becomes the first
      arr[i]=temp
}

        
    return arr
}

arrayIndexCalc(arr)
   return arr.join("")


   
};


// Do not edit below this line
module.exports = reverseString;
