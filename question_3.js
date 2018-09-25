//function named calculateAge that: takes 2 arguments: birth year, current year
function caluculateAge(birthyear,currentyear)
{
    //  calculates the 2 possible ages based on those years.
    age1=currentyear-birthyear;
    age2=currentyear-birthyear+1;
    //  outputs the result to the screen like so: "You are either NN or NN" 
    console.log('you are either    '+age1+'    or     '+age2);
}
//Sample Function call: calculateAge(1984, 2012) calling function 3 times
caluculateAge(1998,2018);
caluculateAge(1994,2019);
caluculateAge(1970,2012);
caluculateAge(1948,2000);