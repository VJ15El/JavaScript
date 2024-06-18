//This file include the logic of find the prime numbers in an array

let arr = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
let primeNumbers = [];

let primeNumberfun = function(arrval)
{
    for(let i = 0; i < arrval.length; i++)
    {
        if(arrval[i] % arrval[i] == 0)
        {
            primeNumbers.push(arrval[i]);
        }
    }
}

primeNumberfun(arr);
console.log("The prime numbers are:", primeNumbers);