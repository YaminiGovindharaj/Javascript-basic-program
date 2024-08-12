let array = [1, 2, 3, 4, 5, 6]; 
let oddNum = 0; 
let evenNum = 0; 
for (let index = 0; index < array.length; index++) { 
	if (array[index] % 2 == 0) { 
		evenNum++; 
	} 
	else { 
		oddNum++; 
	} 
} 
console.log("Total even number: " + evenNum); 
console.log("Total odd number: " + oddNum);
