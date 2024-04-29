"use strict";
//assigment15//
let guest = ["muniba", "ayesha", "unzila", "amna"];
let canNotAttend = "muniba";
//console.log(canNotAttend + " ", "can not invited in the dinner")//
let newguest = "alishba";
guest[guest.indexOf(canNotAttend)] = newguest;
//console.log(guest)//
guest.map((items) => console.log(`dear ${items},"you are invited to the dinner."`));
