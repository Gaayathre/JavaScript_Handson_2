//function named calculateSupply that: takes 2 arguments: age, amount per day.
function caluculateSupply(age,amountperday)
{
    // • calculates the amount consumed for rest of the life (based on a constant max age).
    const maxage=100;
    // • outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
    console.log('You will need   '+(amountperday*365)*(maxage-age)+'  to lastyou untill the ripe old age of    '+age);
}

// • Calling that function three times, passing in different values each time. • Bonus: Accept floating point values for amount per day, and round the result to a round number. • Sample Function call: calculateSupply(28, 36); 
caluculateSupply(28,36)
caluculateSupply(24,66)
caluculateSupply(22,30)
