//This file include the title caps

let titleString = "guvi full stack development";

let finalTitle;

var fun = function (str)
{
    finalTitle = str.split(' ');
    for(let i = 0; i < finalTitle.length; i++)
    {
        finalTitle[i] = finalTitle[i].charAt(0).toUpperCase() + finalTitle[i].slice(1);
    }
    return finalTitle.join(' ');
}

console.log("The title is:", fun(titleString));



