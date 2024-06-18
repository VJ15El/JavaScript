//This file include the logic of sum of an array

let array = [1,2,3,4,5];

let sum = 0;

let sumval = (arrval) =>
{
    for(let i = 0; i<arrval.length; i++)
    {
        sum = sum + arrval[i];
    }
};

sumval(array);
console.log("The sum of an array is:", sum);