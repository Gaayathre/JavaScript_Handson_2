//Write a function named greaterNum that:takes 2 arguments, both numbers. 
function greaterNum(number1,number2)
{ 
    if(number1>number2)
    // returns whichever number is the greater (higher) number.
       console.log('the greatest number of    '+number1+'     and    '+number2+'   is   '+number1);
    else 
       console.log('the greatest number of    '+number1+'     and    '+number2+'   is   '+number2);   
}
//Calling that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10."). 
 greaterNum(5,10)
greaterNum(20,3)
greaterNum(20,20)
