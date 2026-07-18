numbers = [4, 7, 9, 1, 3];
function onClickPush() {
    debugger;
    let number = document.getElementById("txtNum").value;
    document.getElementById("txtNum").value = "";
    numbers.push(number);
    document.getElementById("pResult").innerHTML = numbers;
}

function onClickSort() {
    debugger;
    document.getElementById("pSortResult").innerHTML = numbers.sort((a, b) => a - b);
    
}   