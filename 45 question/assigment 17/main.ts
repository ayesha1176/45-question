//task 17
//lists of guests
let guests = ["ali","humza","faiz","hasan"];

//only two people to invited
//console.log("due to limited space only two people can invoted on dinner")
//while(guests.length >2){
   // const removedguest = guests.pop();
   // console.log(`sorry ${removedguest},you are no longer invited on dinner`);
//}
//printing invitations to the remaining two guests
//guests.forEach((guests) =>{
    //console.log(`dear ${guests}, you are still invited to dinner`)
//});

//removing the last two names from the list
guests.pop();
guests.pop();

//printing the final list to confirm its empty
console.log("final guests list:", guests);
