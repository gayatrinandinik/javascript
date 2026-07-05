function onClickRandom(){
    debugger;
    let a=Number(document.getElementById("txtNum").value);
    alert(Math.random(a));
}

function onClickOtp(){
    debugger;
    let a=Number(document.getElementById("txtNum").value);
    let otp=Math.floor(Math.random(a)*5000)+1000;
    alert(otp);
}

function onClickGame(){
    debugger;
    let a=Number(document.getElementById("txtNum").value);
    let dise=Math.floor(Math.random(a)*6)+1;
    alert(dise);
}

function onClickNum(){
    debugger;
    let a=Number(document.getElementById("txtNum").value);
    let lottery=Math.floor(Math.random(a)*600)+1;
    alert(lottery);
}