//Create an array to hold your top choices (colors, presidents, whatever)
var choices=['green','blue','pink','orange'];
for(let i=0;i<choices.length;i++)
{
    //• For each choice, log to the screen a string like: "My #1 choice is blue." • Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", picking the right suffix for the number based on what it is. 
    console.log('My #'+(i+1)+'choice is '+choices[i]);
}
for(let i=0;i<choices.length;i++){
    var choiceNum=i+1;
    var choifNumsuffix;
    if(choiceNum==1)
    {
        choifNumsuffix='st';
    }
    else if(choiceNum==2)
    {
        choifNumsuffix='nd';
    }
    else if(choiceNum==3)
    {
        choifNumsuffix='rd';
    }
    else 
    {
        choifNumsuffix='th';
    }
    console.log('My   '+choiceNum+'    '+choifNumsuffix+'  choice  '+choices[i]);
}
