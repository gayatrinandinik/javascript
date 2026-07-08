function onClickSlice(){
    debugger;
    let name=document.getElementById("txtName").value;
    let alp=document.getElementById("txtAlp").value;
    let alp1=document.getElementById("txtAlp1").value;
    let result=name.slice(alp,alp1);
    document.getElementById("pResult").innerHTML=result
}

function onClickSubstring(){
    debugger;
    let name=document.getElementById("txtName").value;
    let alp=document.getElementById("txtAlp").value;
    let alp1=document.getElementById("txtAlp1").value;
    let result=name.substring(alp,alp1);
    document.getElementById("pResult").innerHTML=result
}