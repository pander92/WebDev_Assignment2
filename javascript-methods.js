/*----------------------------------------------------------
JavaScript Prototype: Method
Every object in JavaScript has a built-in property called "prototype." 
The prototype constructor is used to add new methods (functions) and properties to a JavaScript object. 
- If a method is constructed, then it will be available for the object. 
- If a property is constructed, then the object will be given the property and its value, as default.

In this Assignment, we use the prototype constructor to add new methods to the Array() object.
----------------------------------------------------------*/

function testFunction(indexVariable){
  result = 2* indexVariable;
  return result;
}

// MAP //
Array.prototype.myMap = function(callbackFn) {
  // array to hold our map results
  resultArray = [];

  //for loop applies callback function to each element and pushes it into result array
  for (let index = 0; index < this.length; index++) {
    resultArray.push(callbackFn(this[index]));
  }
  return resultArray;
};

//TESTS
testArray = [1,2,3,4];
//console.log(testArray.myMap(testFunction)); //should print 2, 4, 6

// FILTER //
Array.prototype.myFilter = function(callbackFn) {
  filterArray = [];

  for (let index = 0; index < this.length; index++) {
    if(callbackFn(this[index])){
      filterArray.push(this[index]);
    }
  }
  return filterArray;
};

console.log(testArray.myFilter(num => num % 2 === 0));

// SOME //
Array.prototype.mySome = function(callbackFn) {
  // Place your code here.
};

// EVERY //
Array.prototype.myEvery = function(callbackFn) {
  // Place your code here.
};

// REDUCE //
Array.prototype.myReduce = function(callbackFn) {
  // Place your code here.
};

// INCLUDES //
Array.prototype.myIncludes = function(searchElement) {
  // Place your code here.
};

// INDEXOF //
Array.prototype.myIndexOf = function(searchElement) {
  // Place your code here.
};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function(searchElement) {
  // Place your code here.
};

// KEYS //
Object.myKeys = function(object) {
  // Place your code here.
};

// VALUES //
Object.myValues = function(object) {
  // Place your code here.
};