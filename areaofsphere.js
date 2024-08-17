function areaofsphere(radius) 
{
	if (isNaN(radius) || radius < 0)
	{
		return "Error: Invalid radius so , Please enter a valid positive number.";
	}
	let area = 4 * Math.PI * Math.pow(radius, 2);
	return area;
}
let radius = 5; 
let sphereArea = areaofsphere(radius);
if (typeof sphereArea === 'number')
{
	console.log("Area of the sphere: " + sphereArea.toFixed(2)); 
} 
else
{
	console.log(sphereArea);
}
