//This file include the logic of find the prime numbers in an array


let arr = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
let primeNumbers = [];

var fun = (array) =>
{
    for(let i = 0; i < array.length; i++)
    {
        if(array[i] % array[i] == 0)
        {
            primeNumbers.push(array[i]);
        }
    }
}

fun(arr);
console.log("The prime numbers are:", primeNumbers);