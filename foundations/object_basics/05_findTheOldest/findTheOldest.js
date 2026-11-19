const findTheOldest = function(arr) {
// I'm guessing you compare everything against each other 
// you give variables to each age and just test, since it's 3 all the time...
//although you can most certainly just give the highest, and probably do
// return arr."whatever the highest was"

//-people[name.yearOfBirth] + people[name.yearOfDeath]
let highest = 0 
let currentYear = (new Date()).getFullYear();
for (i=0; i<arr.length;i++){
if (arr[i].yearOfDeath === undefined){
  arr[i].yearOfDeath = currentYear
}
 
    if((arr[i].yearOfDeath - arr[i].yearOfBirth) > highest) {
      highest = (arr[i].yearOfDeath - arr[i].yearOfBirth)
       };

    
}
console.log(highest)

for(i=0;i<arr.length;i++){


if((arr[i].yearOfDeath - arr[i].yearOfBirth) ==  highest){
  console.log(arr[i])
 console.log("function response")
 return arr[i]
} 
}
};

// Do not edit below this line
module.exports = findTheOldest;
