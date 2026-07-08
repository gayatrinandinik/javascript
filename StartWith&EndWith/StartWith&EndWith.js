function onClickStart(){
    debugger;
    let name=document.getElementById("txtName").value;
    let alp=document.getElementById("txtAlp").value;
    let result=name.startsWith(alp);
    document.getElementById("pResult").innerHTML=result;
}

function onClickEnd(){
    debugger;
    let name=document.getElementById("txtName").value;
    let alp=document.getElementById("txtAlp").value;
    let result=name.endsWith(alp);
    document.getElementById("pResult").innerHTML=result;
}