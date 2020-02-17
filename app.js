
//Variable Declaring
let date, dd, mm, yy, result;
date = new Date();
dd = date.getDate();
mm = date.getMonth();
yy = date.getFullYear();

//Foraming One
result = dd + '-' + mm + '-' + yy;
console.log(result);

//Formating Two
result = dd + '/' + mm + '/' + yy;
console.log(result);

//Formating Three
result = mm + '-' + dd + '-' + yy;
console.log(result);

//Formating Four
result = mm + '/' + dd + '/' + yy;
console.log(result)
