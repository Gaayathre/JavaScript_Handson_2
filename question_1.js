//code 1. Write a function named tellFortune that: 
//• takes 4 arguments: number of children, partner's name, geographic location, job title. • outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// • Call that function 3 times with 3 different values for the arguments.
// • Sample Function call: tellFortune('bball player', 'spain', 'Shaq', 3); 
function tellfortune(jobtittle,geographiclocation,partnersname,numberofchildren)
{
 console.log('you will be a'+'  '+jobtittle+'  '+'in'+'  '+geographiclocation+'  '+'and married to'+'   '+partnersname+'   '+'with'+'   '+numberofchildren+'   '+'kids.');
}
tellfortune('bball player','spain','shaq',3);
tellfortune('football player','German','khan',2);
tellfortune('tennis player','indian','john',1);