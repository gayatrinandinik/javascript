function onClickReplace(){
    debugger;
    let name=document.getElementById("txtName").value;
    let alp=document.getElementById("txtAlp").value;
    let result=name.replace("gayatri",alp);
    document.getElementById("pResult").innerHTML=result
}

function onClickReplaceAll(){
    debugger;
    let name=document.getElementById("txtName").value;
    let alp=document.getElementById("txtAlp").value;
    let result=name.replaceAll(name,alp);
    document.getElementById("pResult").innerHTML=result
}