function onClickCheck(){
    debugger;
    let firstName=document.getElementById("txtFirstName").value;
    let secondName=document.getElementById("txtSecondName").value;
    let result=firstName.concat("  ",secondName);
    document.getElementById("pResult").innerHTML=result
}