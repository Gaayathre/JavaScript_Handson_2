//Create a Movie database 
function movie(fav,duar,star)
{
    this.favmovie=fav;
    this.duration=duar;
    this.stars=star;

}
//Create an object to store the following information about your favorite movie: title (a string), duration (a number), and stars (an array of strings). • Create a function to print out the movie information 
var obj=new movie("Puff the Magic Dragon ","30 minutes",[' Puff',' Jackie',' Living Sneezes']);
//Create a function to print out the movie information like so: "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes." 
console.log('My favorite movie is '+obj.favmovie+"  lasts for  "+obj.duration+"  and  "+obj.stars+"  ");