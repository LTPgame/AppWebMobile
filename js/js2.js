

function ok(){
    
    var name =document.getElementById("inName");
    var strToshow ='Hello World';

    if(name.value) {strToshow += " " + name.value;}
    strToshow+= " !";
    alert(strToshow);
}

document.addEventListener("DOMContentLoaded",function(event){
    console.log("le dom est chargé");
    

    var btHello=document.getElementById("btHello");
    btHello.addEventListener("click",ok);
});