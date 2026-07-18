numbers=["1","2","3","4","5","6","7"]
function onClickPush(){
    debugger;
    var number=document.getElementById("txtNum").value;
    document.getElementById("txtNum").value="";
    numbers.push(number);
    document.getElementById("pResult").innerHTML=numbers;

}

function onClickCheck(){
    debugger;
    var search=document.getElementById("txtSearch").value;
    document.getElementById("txtSearch").value="";
    document.getElementById("pIndexOfResult").innerHTML = numbers.indexOf(search);
}
