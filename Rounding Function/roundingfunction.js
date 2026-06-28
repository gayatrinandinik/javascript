function onClickRound(){
    debugger;
    var InputNumber=document.getElementById("txtNum").value;
    var result=Round(InputNumber);
    alert(result);
}

function onClickCeli(){
    debugger;
    var InputNumber=document.getElementById("txtNum").value;
    var result=Ceil(InputNumber);
    alert(result);
}

function onClickFloor(){
    debugger;
    var InputNumber=document.getElementById("txtNum").value;
    var result=Floor(InputNumber);
    alert(result);
}

function  onClickTrunc(){
    debugger;
    var InputNumber=document.getElementById("txtNum").value;
    var result=Trunc(InputNumber);
    alert(result);
}