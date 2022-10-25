// Load the full build.
var _ = require('lodash');

let chunk = _.chunk([1,2,3,4,5,6,7,8,9,0,9,8,7,6,5,4,3,2,1], 2);
console.log(chunk)

let reverse = _.reverse([1,2,3,4,5,6,7,8,9])
console.log(reverse)

let without = _.without([2,3,4,1,2,3,4,5,5,6,], 3, 2, 1)
console.log(without)

let shuffle = _.shuffle([1,2,3,4,5,6])
console.log(shuffle)