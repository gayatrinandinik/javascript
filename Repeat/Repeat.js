function onClickCheck(){
    debugger;
    let name=document.getElementById("txtName").value;
    let number=document.getElementById("txtNum").value;
    let result=name.repeat(number);
    document.getElementById("pResult").innerHTML=result
}