function onClickMax(){
    debugger;
    let a = document.getElementById("txtstud1").value;
    let b = document.getElementById("txtStud2").value;
    let c = document.getElementById("txtStud3").value;
    let d = document.getElementById("txtStud4").value;
    let e = document.getElementById("txtStud5").value;
    let max=Math.max(a,b,c,d,e);
    alert(max);
}
function onClickMin(){
    debugger;
    let a = document.getElementById("txtstud1").value;
    let b = document.getElementById("txtStud2").value;
    let c = document.getElementById("txtStud3").value;
    let d = document.getElementById("txtStud4").value;
    let e = document.getElementById("txtStud5").value;
    let min=Math.min(a,b,c,d,e);
    alert(min);
}