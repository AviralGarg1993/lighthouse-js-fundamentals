var conditionalSum = function(values, condition) {
  // Your code here
	var sum = 0;

	// replaces the multiple checking
	var conditionIsEven;
	if(condition == "even"){
		conditionIsEven = true;
	}
	
	for(var i=0;i<values.length;i++) {
		if(isConditionEven) {
			if(values[i] % 2 === 0) {
				sum += values[i];
            }
		} else {
			if(values[i] % 2 !== 0) {
				sum += values[i];
			}
		}
	}
	return sum;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));