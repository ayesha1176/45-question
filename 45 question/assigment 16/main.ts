var GUEST = ["AMNA", "MUNIBA", "AYESHA", "UNZILA"];
let NOTATTEND = "MUNIBA";
let NEWGUEST = "NABA";
GUEST[GUEST.indexOf(NOTATTEND)] = NEWGUEST;
console.log(GUEST);

//GUEST.map((items)=>
//console.log(`DEAR ${items},I FOUND A BIG DINNER TABLE SO I INVITED THE MORE GUESTS.`));

//TASK 16 PART 2//
var GUEST = ["AMNA", "MUNIBA", "AYESHA", "UNZILA"];
GUEST.unshift("areej");
console.log(GUEST);

//part 3
let middleguest = "muskan";
let middleindex = GUEST.length/3;
GUEST.splice(middleindex,0,middleguest);
console.log(GUEST)

//part 4 append
GUEST.push("sufiyan");
console.log(GUEST);

//part 5
GUEST.map((items) =>
console.log(`dear ${items}, you are invited in the more people list on dinner`));




