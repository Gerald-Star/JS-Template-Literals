//Template Literals

// Template[getTemplate('basic')].created = function() {
//     this.data = {
//         name: '',
//         email: '',
//         password: '',
//         password_confirmation: '',
//         password_confirmation_confirmation: '',
//         email_confirmation: '',
//         email_confirmation_confirmation: '',
//     };
// };

/*
Template literals are an alternative way of working with strings, which was introduced
 in the ES6 addition to the JavaScript language.
*/

/*old way of working with strings
'Hello, World!'
"Hello, World!"

*/

/*Es6 way of working with strings with use of 
backtick characters as delimiters
`Hello, World!`

The above code snippet is an example of a template string,
 which is also known as a template literal.
*/

//Difference between template literals and normal strings
/*
//1. First, it allows for variable interpolation:*/
//ES5 string method

var greeting = "Hello";
var places = "World";
console.log(greeting + " " + places + "!");

//Ex1. Using Template Literal from ES6
let greet = "Hello";
let place = "World";
console.log(`${greet} ${place} !`)

//Ex 2
let exam = "passed";
let promotion = "certification";
console.log(`${exam} ${promotion}`)

//2 Besides variable interpolation, template strings can span multiple lines.
/*
`Hello,
World
!
`
*/

//template literals syntax actually allows for expression evaluation. 
console.log(`${1 + 1 + 1 + 1 + 1} stars!`)
//5 stars

// use cases of template literals are nested 
//template literals and tagged templates


//DATA STRUCTURES

/*
 methods that exist on arrays:

 forEach 
filter
 map

*/

//The forEach() method
/*Arrays in JavaScript come with a handy method that allows 
you to loop over each of their members. */

const fruits = ['kiwi','mango','apple','pear'];
function appendIndex(fruit, index) {
    console.log(`${index}. ${fruit}`)
}
fruits.forEach(appendIndex);

const veggies = ['lettuce', 'egg', 'spinach']
    function myVeggies(food, meal){
        console.log(`${meal}. ${food}`)
    }
    veggies.forEach(myVeggies);



//     const veggi = ['onion', 'garlic', 'potato'];
// veggi.forEach( function(dish, index) {
//     console.log(`${index}. ${fruit}`);
// });


//The filter() method
/*
Another very useful method on the array is the filter() method. It filters your arrays based on a specific test.
Those array items that pass the test are returned.*/

// const nums = [0,10,20,30,40,50];
// nums.filter( function(num) {
//     return num > 20;
// })
// console.log(num);

//the forEach() method, the filter() method also accepts a 
//function and that function performs some work on each of the items in the array.


//The map method
/* 
This method is used to map each array item over to another
 array's item, based on whatever work is performed inside the function that is passed-in to the map as a parameter. 

For example:*/

// [0,10,20,30,40,50].map( function(num) {
//     return num / 10
// })
//[0,1,2,3,4,5]



//Working with Objects in JavaScript
/*
A lot of the information on how to work with objects in 
JavaScript has already been covered in this course.

The example below demonstrates how to use the object data structure to complete a
 specific task. This task is to convert an object to an array:*/

 const result = [];
const drone = {
    speed: 100,
    color: 'yellow'
}
const droneKeys = Object.keys(drone);
droneKeys.forEach( function(key) {
    result.push(key, drone[key])
})
console.log(result)




