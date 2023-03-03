/*----------------------------------------------------------
JavaScript Prototype: Method
Every object in JavaScript has a built-in property called "prototype." 
The prototype constructor is used to add new methods (functions) and properties to a JavaScript object. 
- If a method is constructed, then it will be available for the object. 
- If a property is constructed, then the object will be given the property and its value, as default.

In this Assignment, we use the prototype constructor to add new methods to the Array() object.
----------------------------------------------------------*/

//Change array values here for individual tests
testArray = [1,2,3];

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

//MAP TEST
//console.log("Map function test:")
//console.log(testArray.myMap(num => num * 2)); //should print 2, 4, 6


// FILTER //
Array.prototype.myFilter = function(callbackFn) {
  //hold results
  filterArray = [];

  //loop through, if function returns true then add to result array
  for (let index = 0; index < this.length; index++) {
    if(callbackFn(this[index])){
      filterArray.push(this[index]);
    }
  }
  return filterArray;
};

//FILTER TEST
//console.log("Filter function test:")
//console.log(testArray.myFilter(num => num % 2 === 0));


// SOME //
Array.prototype.mySome = function(callbackFn) {
  for (let index = 0; index < this.length; index++) {
    if(callbackFn(this[index])){
      return true;
    }
  }
  return false;
};

//SOME TEST
//console.log("Some function test:")
//console.log(testArray.mySome(num => num % 2 === 0));


// EVERY //
Array.prototype.myEvery = function(callbackFn) {
  for (let index = 0; index < this.length; index++) {
    if(!callbackFn(this[index])){
      return false;
    }
  }
  return true;
};

//EVERY TEST
//console.log("Every function test:")
//console.log(testArray.myEvery(num => num % 2 === 0));

// REDUCE //
Array.prototype.myReduce = function(callbackFn) {
  let accumulator = 0; //if function has an initial value, can be set here. 
  //applies function to each array item, taking the accumulator (with its accumulated value) as a parameter
  for (let index = 0; index < this.length; index++) {
    accumulator = callbackFn(accumulator, this[index]);
    //console.log(accumulator);
  }
  return accumulator;
};

//REDUCE TEST
//console.log("Reduce function test:")
//console.log(testArray.myReduce((total, val) => total + val));

// INCLUDES //
Array.prototype.myIncludes = function(searchElement) {
  // Place your code here.
  for(let index=0; index<this.length; index++){ // loop through the array 
    if(this[index]== searchElement){  //searching if the element is in the array. 
      return true; 
    }
     
  }
    return false; 
};

//INCLUDES TEST
// console.log(testArray.myIncludes(2));


// INDEXOF //
Array.prototype.myIndexOf = function(searchElement) {
  // Place your code here.
  for(let index = 0 ; index< this.length; index++){ // this will loop through the array 
    if(this[index]== searchElement) // condition if the searchElement is equal to the array then it will return the index
    return index; 
  }
  return -1; // if not then return -1. 
};
//INDEXOF TEST
console.log(testArray.myIndexOf(2));


// LASTINDEXOF //
Array.prototype.myLastIndexOf = function(searchElement) {
  // Place your code here.
  for(let index = this.length-1; index>=0; index--){ //loop through the array from last index to first index
    if(this[index] == searchElement){ // if meets the condition will return index 
      return index; 
    }
  }
  return -1;  // if doesn't meet the conditions will return -1 
};
//LASTINDEXOF TEST
//console.log(testArray.myLastIndexOf(3));

// KEYS //
Object.myKeys = function(object) {
  // Place your code here.
  let key = []; 
  for(let keys in object){ // search for keys inside the array 
      key.push(keys);  // pushing the keys to new array 
  }
return key; // returning the keys 

};
//KEYS TEST;
//console.log(Object.myKeys(testArray));

// VALUES //
Object.myValues = function(object) {
    // Place your code here.
    let value = []; 
      for(let index in object){ //run through the array 
          value.push(object[index]); //pushing the property values into the array 
      }
    return value; // returning the values 
  
};

//VALUES TEST
 console.log(Object.myValues(testArray));