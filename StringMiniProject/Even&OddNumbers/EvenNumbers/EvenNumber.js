function onClickCheck(){
    debugger;
    let StartNum=Number(document.getElementById("txtStartNum").value);
    let EndNum=Number(document.getElementById("txtEndNum").value);
    if(StartNum%2==1)
    {
        StartNum=StartNum+1
    }
    let i=StartNum
    while(i<=EndNum){
        alert(i);
     i=i+2;
    }

}
