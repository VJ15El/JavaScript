// This file is to include the logic of Rotate Array by k times

let Array = [1,5,9,6,1,4,3];
let k = 1;

const RotateFunction = function(array,rotateTimes)
{

    for(let i = 0; i<rotateTimes; i++)
    {
       array.unshift(array.pop());
    }

    return array;
}

console.log("The rotated Array is", RotateFunction(Array,k));
