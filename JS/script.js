function changeContent(){
   let a= document.getElementById("more");
   if(a.style.display=="block")
   {
       a.style.display="none";
   }
   else{
       a.style.display="block";
   }
}

function formvalidation(){
    let x=document.getElementById("name-input").value;
    let y=document.getElementById("email-input").value;
    let z=document.getElementById("batch-input").value;

    if(x=="")
    {
        document.getElementById("name-validation").style.display="block";
    }
    if(y=="")
    {
        document.getElementById("email-validation").style.display="block";
    }
    if(z=="none")
    {
        document.getElementById("batch-validation").style.display="block";
    }

    if((x|y|z)=="")
    {
        return false;
    }
}