//assigment 36
//36. t-Shirt: Write a function called make_shirt() that accepts a size and the
//text of a message that should be printed on the shirt. The function should print
//a sentence summarizing the size of the shirt and the message printed on it.
//Call the fction.
function makeShirt(size, text) {
    console.log("you order a ".concat(size, " shirt that say ").concat(text));
}
makeShirt("large", "i love typescript");
makeShirt("medium", "i need a big shirt");
