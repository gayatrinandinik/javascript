function onClickCheck(){
    debugger;
    let StartNum=Number(document.getElementById("txtStartNum").value);
    let EndNum=Number(document.getElementById("txtEndNum").value);
        StartNum++; 
    let i=StartNum
    while(i<=EndNum){
        alert(i);
     i=i+2;
    }

}

