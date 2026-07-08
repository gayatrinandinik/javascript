function onClickCheck(){
    debugger;
    let name=document.getElementById("txtName").value;
    let alp=document.getElementById("txtAlp") .value;
    let result=name.includes(alp);
    document.getElementById("pResult").innerHTML=result;
}