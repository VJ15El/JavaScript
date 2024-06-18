//This file include the logic of print the odd numbers in an array


let arr = [1,2,9,8,25];
let oddNumbers = [];
var x = (arrval) => 
{
    for(let i = 0; i < arrval.length; i++){

        if(arr[i] % 2 != 0)
        {
           oddNumbers.push(arr[i]);
        }
    }
};

x(arr);

console.log("The odd number is", oddNumbers);
