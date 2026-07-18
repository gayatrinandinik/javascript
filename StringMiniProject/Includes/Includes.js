cars=["Micro","Maruti","Tat","Bmw","Tar"]
function onClickPush(){
    debugger;
    var car=document.getElementById("txtCar").value;
    document.getElementById("txtCar").value="";
    cars.push(car);
    document.getElementById("pResult").innerHTML=cars;

}

function onClickcheck(){
    debugger;
    var search=document.getElementById("txtSearch").value;
   document.getElementById("pInculdeResult").innerHTML  =cars.includes(search);
}
