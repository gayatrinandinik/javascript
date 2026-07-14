flowers=[]
function onClickPush(){
    debugger;
    var flower=document.getElementById("txtFlowers").value;
    document.getElementById("txtFlowers").value = "";
    flowers.push(flower);
    document.getElementById("pResult").innerHTML=flowers;
}

function onClickPop(){
    debugger;
    var flower=document.getElementById("txtFlowers").value;
    document.getElementById("txtFlowers").value = "";
    flowers.pop(flower);
    document.getElementById("pResult").innerHTML=flowers;
}

function onClickUnshift(){
    debugger;
      var flower=document.getElementById("txtFlowers").value;
      document.getElementById("txtFlowers").value = "";
    flowers.unshift(flower);
    document.getElementById("pResult").innerHTML=flowers;
}

function onClickShift(){
    debugger;
      var flower=document.getElementById("txtFlowers").value;
      document.getElementById("txtFlowers").value = "";
    flowers.shift(flower);
    document.getElementById("pResult").innerHTML=flowers;
}

firut=[]
function onClickFriutPush(){
    debugger;
    var firuts=document.getElementById("txtFruit").value;
    document.getElementById("txtFruit").value = "";
    firut.push(firuts);
    document.getElementById("pFriutResult").innerHTML=firut;
}

function onClicFriutkPop(){
    debugger;
    var firuts=document.getElementById("txtFruit").value;
    document.getElementById("txtFruit").value = "";
    firut.pop(firuts);
    document.getElementById("pFriutResult").innerHTML=firut;
}

function onClickFriutUnshift(){
    debugger;
      var firuts=document.getElementById("txtFruit").value;
      document.getElementById("txtFruit").value = "";
    firut.unshift(firuts);
    document.getElementById("pFriutResult").innerHTML=firut;
}

function onClickFriutShift(){
    debugger;
      var firuts=document.getElementById("txtFruit").value;
      document.getElementById("txtFruit").value = "";
    firut.shift(firuts);
    document.getElementById("pFriutResult").innerHTML=firut;
}
function onClickAdd(){
    debugger;
    let all=flowers.concat(firut);
    document.getElementById("pResultAll").innerHTML = all.join("&&");
    document.getElementById("pResultAll").style = "color:red";    
    alert(all);
}