//function named helloWorld that: 
function helloworld(languagecode)
{
    //returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English. 
    switch(languagecode)
    {
        case 'ch':
          console.log("hello world in spanish is spoken as NI HAO SHIJIE");
            break;
        case 'gr':
            console.log("hello wold in german is spoken as HALLO WALT");
            break;
        default:
        console.log("hello world");
    }
}
//function call
helloworld('ch');
helloworld();
helloworld('gr');