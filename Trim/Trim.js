function onClickTrim(){
    debugger;
    let name=document.getElementById("txtName").value;
    document.getElementById("pResultName").innerHTML = name;
    document.getElementById("pResultLength").innerHTML = name.length;

   let trimName=name.trim();
    document.getElementById("pResultTrimName").innerHTML = trimName;
    document.getElementById("pResultTrimLength").innerHTML = trimName.length;
}

function onClickTrimStart(){
    debugger;
    let name=document.getElementById("txtName").value;
    document.getElementById("pResultName").innerHTML = name;
    document.getElementById("pResultLength").innerHTML = name.length;

   let trimName=name.trimStart();
    document.getElementById("pResultTrimName").innerHTML = trimName;
    document.getElementById("pResultTrimLength").innerHTML = trimName.length;
}

function onClickTrimEnd(){
    debugger;
    let name=document.getElementById("txtName").value;
    document.getElementById("pResultName").innerHTML = name;
    document.getElementById("pResultLength").innerHTML = name.length;

   let trimName=name.trimEnd();
    document.getElementById("pResultTrimName").innerHTML = trimName;
    document.getElementById("pResultTrimLength").innerHTML = trimName.length;
}