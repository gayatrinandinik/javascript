function onClickRandomValue(){
    debugger;
    let RandomValue=Math.random();
    document.getElementById("pResult").innerHTML=RandomValue
}

function onClickDice(){
    debugger;
    let Dice=Math.floor(Math.random()*6)+1;
    document.getElementById("Dice").innerHTML=Dice
}
