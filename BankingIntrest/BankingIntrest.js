function onClickCheck(){
    debugger;
    let a = Number(document.getElementById("txtAmount").value);
    let b = Number(document.getElementById("txtRate").value);
    let c = Number(document.getElementById("txtyear").value);
    let banking = a*Math.pow((1+b/100 ),c);
    alert(banking.toFixed(2));
}