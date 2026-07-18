    numbers=["1","2","3","4","5","7"]
    function onClickPush(){
    debugger;
    let number=document.getElementById("txtNum").value;
    document.getElementById("txtNum").value="";
    numbers.push(number);
    document.getElementById("pResult").innerHTML=numbers;
}
function onClickReverse(){
    debugger;
    numbers.reverse();
    document.getElementById("pReverseResult").innerHTML=numbers;
}