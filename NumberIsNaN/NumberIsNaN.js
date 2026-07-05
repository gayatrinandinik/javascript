function onClickAdd(){
    debugger;
    let FirstValue=document.getElementById("txtFirstValue").value;
    let SecondValue=document.getElementById("txtSecondValue").value;

    alert(isNaN(FirstValue));
    alert( isNaN(SecondValue));
    
    if(!isNaN(FirstValue)&&! isNaN(SecondValue)){
        alert(Number(FirstValue) + Number(SecondValue))
    }
    else{
        alert(FirstValue+SecondValue)
    }
}