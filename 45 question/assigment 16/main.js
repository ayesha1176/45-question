var GUEST = ["AMNA", "MUNIBA", "AYESHA", "UNZILA"];
var NOTATTEND = "MUNIBA";
var NEWGUEST = "NABA";
GUEST[GUEST.indexOf(NOTATTEND)] = NEWGUEST;
console.log(GUEST);
//GUEST.map((items)=>
//console.log(`DEAR ${items},I FOUND A BIG DINNER TABLE SO I INVITED THE MORE GUESTS.`));
//TASK 16 PART 2//
var GUEST = ["AMNA", "MUNIBA", "AYESHA", "UNZILA"];
GUEST.unshift("areej");
console.log(GUEST);
//part 3
var middleguest = "muskan";
var middleindex = GUEST.length / 3;
GUEST.splice(middleindex, 0, middleguest);
console.log(GUEST);
//part 4 append
GUEST.push("sufiyan");
console.log(GUEST);
//part 5
GUEST.map(function (items) {
    return console.log("dear ".concat(items, ", you are invited in the more people list on dinner"));
});
