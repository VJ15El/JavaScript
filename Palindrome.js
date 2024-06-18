//This file include the logic of find a palindrome in a array

let palArray = new Array();
palArray = [121,131,353];

let palOut = new Array();

let fun = function(array)
{
    let startind = 0;
    let endind = array.length;
    while(startind < endind)
    {
        if(array[startind] != array[endind])
        {
            palOut.push(array[startind]);
        }
        startind ++;
        endind --;
    }
}
fun(palArray)
console.log("The palindrome is", palOut);
