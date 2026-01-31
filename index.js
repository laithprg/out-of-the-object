let inputname=document.getElementById("input-name-id");
let shownames=document.getElementById("show-names-id");
function addName(){
    let paragraf=document.createElement("p");
    if(inputname.value==="")
    return;
paragraf.textContent=inputname.value;
shownames.appendChild(paragraf);
inputname.value="";
}