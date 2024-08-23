function convert_positive(a)
{
	return a < 0 ? -(a) : a;
}
let n = -7;
let m = -9;
n = convert_positive(n);
console.log(n);
m = convert_positive(m);
console.log(m);
