const stringArr = ["a", "b", "c","n","j", "u","k"];
var count=0;
for(var i=0;i<stringArr.length;i++)
{
if(stringArr[i]=="a" || stringArr[i]=="e" || stringArr[i] =="i" || stringArr[i]=="o" || stringArr[i]=="u"){
count = count+1;
}
}
console.log(count)
