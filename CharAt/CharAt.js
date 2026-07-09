function onClickCheck(){
    debugger;
    let name=document.getElementById("txtName").value;
    let index=document.getElementById("txtIndex").value;
    let result=name.charAt(index);
    document.getElementById("pResult").innerHTML=result
}