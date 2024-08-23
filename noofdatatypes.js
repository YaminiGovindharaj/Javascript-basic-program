let countDtypes = (arr) => 
{
	return arr.reduce((acc, curr) => 
	{
		if (acc[typeof curr]) 
		{
			acc[typeof curr]++;
		} 
		else 
		{
			acc[typeof curr] = 1
		}
		return acc
	}
	, {})
}
let arr = [function () { }, new Object(), [], {},
    NaN, Infinity, undefined, null, 0];
console.log(countDtypes(arr));
