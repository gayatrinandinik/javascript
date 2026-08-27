function onClickCheck(){
    debugger;
    let StartNum=Number(document.getElementById("txtStartNum").value);
    let EndNum=Number(document.getElementById("txtEndNum").value);
    if(StartNum%2==0)
    {
        StartNum=StartNum+1
    }
    for(i=StartNum;i<=EndNum;i=i+2){
        alert(i);
    }
}