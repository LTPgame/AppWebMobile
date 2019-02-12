document.addEventListener("DOMContentLoaded",function(event){
    console.log("le dom est chargé");

    var textNom=document.getElementById("inName");
    textNom.addEventListener('focus',function(e){
        e.target.value = "test"
        textNom.style.backgroundColor='#d6f6c6';
    })

    
    
    var form=document.getElementById("form");
    
    form.addEventListener('submit',function(e){
        var sub=1
        
        var champs= document.getElementsByClassName("champ");
        for(var i=0; i<champs.length ;i++){
            if(champs[i].value==""){
                console.log("champ vide");
                e.preventDefault();
                sub=0;
            }
            if(champs[i].id=="inmdp" && champs[i].value!=""){
                if(champs[i].value.length<6){
                    e.preventDefault();
                    sub=0;
                    console.log("Le mot de passe ne doit pas faire moins de 6 caractères");
                }
           
                if(champs[i].value!=champs[i+1].value){
                    e.preventDefault();
                    sub=0;
                    console.log("mdp differents")
                }
            }

            if(champs[i].id=="inage" && champs[i].value!=""){
                if(isNaN(champs[i].value) || champs[i].value <=0){
                    e.preventDefault();
                    sub=0;
                    console.log("L'age doit etre un entier positif")
                }
            }
        }
        if(sub==1) console.log("submit");
    })
    
});