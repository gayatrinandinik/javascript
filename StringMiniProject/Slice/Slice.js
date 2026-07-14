flowers=[]
function onClickPush(){
    debugger;
    var flower=document.getElementById("txtFlowers").value;
    flowers.push(flower);
    document.getElementById("pResult").innerHTML=flowers;
}

function onClickPop(){
    debugger;
    var flower=document.getElementById("txtFlowers").value;
    flowers.pop(flower);
    document.getElementById("pResult").innerHTML=flowers;
}

function onClickUnshift(){
    debugger;
      var flower=document.getElementById("txtFlowers").value;
    flowers.unshift(flower);
    document.getElementById("pResult").innerHTML=flowers;
}

function onClickShift(){
    debugger;
      var flower=document.getElementById("txtFlowers").value;
    flowers.shift(flower);
    document.getElementById("pResult").innerHTML=flowers;
}
function onClickSlice(){
    debugger;
    var startingnumber=Number(document.getElementById("txtStartingNum").value);
    var endingnumber=Number(document.getElementById("txtEndingNum").value);
     document.getElementById("pSliceResult").innerHTML=flowers.slice(startingnumber,endingnumber)

}