colours=[]
function onClickPush(){
    debugger;
    let colour=document.getElementById("txtColour").value;
    document.getElementById("txtColour").value="";
    colours.push(colour);
    document.getElementById("pResult").innerHTML=colours;

}

function onClickRead(){
    debugger;
    let index=Number(document.getElementById("txtIndex").value);
    document.getElementById("txtIndex").value="";
    document.getElementById("pIndexResult").innerHTML=colours[index];
}