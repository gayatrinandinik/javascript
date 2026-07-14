flowers=[]
function onClickPush(){
    debugger;
    var flower=document.getElementById("txtFlowers").value;
    flowers.push(flower);
    document.getElementById("pResult").innerHTML=flowers;
}
flowers=[]
function onClickPop(){
    debugger;
    var flower=document.getElementById("txtFlowers").value;
    flowers.pop(flower);
    document.getElementById("pResult").innerHTML=flowers;
}
flowers=[]
function onClickUnshift(){
    debugger;
      var flower=document.getElementById("txtFlowers").value;
    flowers.unshift(flower);
    document.getElementById("pResult").innerHTML=flowers;
}
flowers=[]
function onClickShift(){
    debugger;
      var flower=document.getElementById("txtFlowers").value;
    flowers.shift(flower);
    document.getElementById("pResult").innerHTML=flowers;
}