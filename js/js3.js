

function ok(){
    
   
    var imag= document.getElementById("imag");
   
   
    if(imag.getAttribute("src")=="images/loic.jpg")
        imag.setAttribute("src", "images/aldehi.jpg");
    else
        imag.setAttribute("src", "images/loic.jpg");


}

document.addEventListener("DOMContentLoaded",function(event){
    console.log("le dom est chargé");
    

    var btallume=document.getElementById("btswitch");
    btswitch.addEventListener("click",ok);
});