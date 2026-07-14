flowers=["rose","lily","lotus","marygold","bulebull"]
function onClickSubmit(){
    debugger;
    var index=document.getElementById("txtIndexNum").value;
    document.getElementById("pResult").innerHTML=flowers[index];
}