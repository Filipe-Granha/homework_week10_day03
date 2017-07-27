var arrayTasks = {

	concat: function (arr1, arr2) {   
    var expectation = arr1.concat(arr2);
    return expectation;
  },

  insertAt: function (arr, itemToAdd, index) {
  	arr.splice(index, 0, itemToAdd);
  	return arr;
  },

  square: function (arr) {
  	var sqArr = arr.map(function(x) {
  	return x * x;
  	});
  	return sqArr;
  },

  sum: function (arr) {
  	var sum = arr.reduce((a, y) => a + y);
  	return sum
  },

  findDuplicates: function (arr) {
//finds duplicates and moves them into new array
    var sorted_arr = arr.slice().sort();
    var duplicates = [];
    for (var i = 0; i < arr.length - 1; i++) {
	  if (sorted_arr[i + 1] == sorted_arr[i]) {
		duplicates.push(sorted_arr[i]);
	}
}
//creates new array, removing duplicates
  var noRepeteadDuplicates = Array.from(new Set(duplicates));
   return noRepeteadDuplicates
},

	removeAndClone: function (arr, valueToRemove) {
var newArray = [];
for(var i = arr.length; i--;){
	//splice -> at index=valueToRemove, remove valueToRemove 
	if (arr[i] === valueToRemove) arr.splice(i, valueToRemove);
	newArray = arr
}
return newArray
},

findIndexesOf: function (arr, itemToFind) {
	var indexes = [], i;
	for(i = 0; i < arr.length; i++){
//everytime itemToFind has index ('if it exists')
		if (arr[i] === itemToFind)
			indexes.push(i);
	}
	return indexes;
},

sumOfAllEvenNumbersSquared: function (arr) {
	//maps and squares elements
	var sqArr = arr.map(function(x) {
		return x * x;
	});
	var evens = [];
		for(i = 0; i < sqArr.length; i++){
			if ((sqArr[i] % 2) != 1) {
				//if even, pushes elements into evens Array
				evens.push(sqArr[i]);         
			}
		}	
		//calculates sum of all elements inside evens
	var sum = evens.reduce((a, y) => a + y);
		return sum
	},


}


module.exports = arrayTasks
