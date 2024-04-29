var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// STORE THE LOCATION IS AN ARRAY
var places = ["TOKYO", "PAKISTAN", "JAPAN", "CHINA", "america"];
//PRINT THE ARRAY IN ITS ORIGINAL ORDER
console.log("ORIGINAL ORDER:", places);
//PRINT THE ARRAY IN ALPHABETICAL ORDER WITHOUT MODIFYING THE ACTUAL LISTS
console.log("ALPHABETICAL ORDER:", __spreadArray([], places, true).sort());
//show thw array is still in its original order
console.log("original order after sorting", places);
//print the array in reverse alphabetical order without changing the order of the original list
console.log("reverse alphabetical order", __spreadArray([], places, true).sort().reverse());
//show the array is still in  its original order
console.log("original order after reverse sorting:", places);
//rverse the order of the lists
places.reverse();
console.log("reversed order:", places);
//reverse the order of the lists to again the original orders
places.reverse();
console.log("back to original order:", places);
//reverse the order in the list again to get back to the original order
places.reverse();
console.log("back to the original order:", places);
//sort the array in alphabetical order
places.sort();
console.log("sorted in alphabetical order", places);
//sort the array in reverse alphateical order
places.sort(); // Sort the array alphabetically
places.reverse(); // Reverse the sorted array
console.log("sorted in reverse alphabetical orders:", places);
