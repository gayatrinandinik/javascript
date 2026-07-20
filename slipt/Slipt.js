function onClickCheck(){
    debugger;
    let names=document.getElementById("txtName").value;
    let result=names.split(" ");
    document.getElementById("pResult").innerHTML=result
}