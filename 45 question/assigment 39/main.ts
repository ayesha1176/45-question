//39. City Names: Write a function called city_country() that takes in the name
/*of a city and its country. The function should return a string formatted like this:

"Lahore, Pakistan"

Call your function with at least three city-country pairs, and print the value
that’s returned.*/
//assigment 39

function city_country(City: string , country: string):string{
    return `${City} , ${country}`
}

let city1 = city_country('lahore','pakistan')
let city2 = city_country('tokyo','japan')
let city3 = city_country('paris','france')

console.log(city1)
console.log(city2)
console.log(city3);
