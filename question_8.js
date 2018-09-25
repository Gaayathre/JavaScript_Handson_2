//Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings). 
var recipe = {
    'title': 'Mole',
    'servings': 2,
    'ingredients': ['cumin', 'cinnamon', 'cocoa']
};
//output On separate lines (one console.log statement for each), log the recipe information so it looks like: 
//▪ Mole
// ▪ Serves: 2 
//▪ Ingredients: 
   //• cinnamon 
   //• cumin 
   //• cocoa 
console.log("."+recipe.title);
console.log('. Servings: ' + recipe.servings);
console.log('.Ingredients:');
for (var i = 0; i < recipe.ingredients.length; i++) {
    console.log("   ."+recipe.ingredients[i]);
}