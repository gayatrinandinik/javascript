flowers=[]
function onClickPush(){
    debugger;
    let flower=document.getElementById("txtFlowers").value;
    document.getElementById("txtFlowers").value="";
    flowers.push(flower);
    document.getElementById("pResult").innerHTML=flowers;
}
function onClcikRead(){
    debugger;
    i=0;
    let length=flowers.length;
    while(i<length){
        alert(flowers[i]);
        i++;

    }
}