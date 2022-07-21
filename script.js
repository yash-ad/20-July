console.log("Script file is here");
console.log(document);
console.log(typeof(document));
let buttonElement= document.getElementById("firstbutton");
console.log(buttonElement)


function sum(a=15,b=15)
{ 
    
    let result = a + b;
    console.log(result);
    

}
sum();