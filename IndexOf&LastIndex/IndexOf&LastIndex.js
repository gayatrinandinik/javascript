function onclickIndexOf(){
    debugger;
    let name=document.getElementById("txtName").value;
    let name1=document.getElementById("txtAlp").value;
    let result=name.indexOf(name1);
    document.getElementById("pResultIndexOf").innerHTML=result;



}
function onclickLastIndex(){
    debugger;
    let name=document.getElementById("txtName").value;
    let name1=document.getElementById("txtAlp").value;
    let result=name.lastIndexOf(name1);
    document.getElementById("pResultIndexOf").innerHTML=result;
}