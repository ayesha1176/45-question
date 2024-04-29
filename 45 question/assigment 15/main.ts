//assigment15//

let guest: string [] = ["muniba","ayesha","unzila","amna"];
let canNotAttend: string = "muniba";
//console.log(canNotAttend + " ", "can not invited in the dinner")//

let newguest: string = "alishba";
guest [guest.indexOf(canNotAttend)] = newguest;
//console.log(guest)//

guest.map((items) =>
console.log(`dear ${items},"you are invited to the dinner."`));


