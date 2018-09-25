// function named assignGrade that: • takes 1 argument, a number score
function assignGrade(numberscore)
{ 
   //returns a grade for the score, either "A", "B", "C", "D", or "F"
   if(numberscore>85)
     return 'A';
    else if(numberscore>70)
     return 'B';
    else if(numberscore>55)
      return 'C';
    else if(numberscore>40)
           return 'D';
    else 
    return 'F';
}
//Sample Function call: console.log('You got a ' + assignGrade(95)); 
console.log('You got a '+assignGrade(90));
console.log('You got a '+assignGrade(79));
console.log('You got a '+assignGrade(66));
console.log('You got a '+assignGrade(55));
console.log('You got a '+assignGrade(35));