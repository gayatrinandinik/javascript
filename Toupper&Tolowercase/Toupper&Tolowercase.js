function onClickToupper(){
    debugger;
    let Name=document.getElementById("txtName").value;
    uppercase=Name.toUpperCase();
    document.getElementById("pTo").innerHTML=uppercase;
}

function onClickTolower(){
    debugger;
    let Name=document.getElementById("txtName").value;
    lowercase=Name.toLowerCase();
    document.getElementById("pTo").innerHTML=lowercase;
}