//This file include the logic of remove duplicates in a array

let array = [1, 2, 1, 4, 6,5, 7, 6];

let removeDuplicates = [];

let removeFun = function(dupVal)
{
    for(let i = 0; i < dupVal.length; i++)
    {
       if(removeDuplicates.indexOf(dupVal[i]) == -1)
       {
        removeDuplicates.push(dupVal[i]);
       }
    }
}

 removeFun(array);
 console.log(removeDuplicates);