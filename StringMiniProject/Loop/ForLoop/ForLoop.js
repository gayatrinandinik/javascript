function OnclickCheck(){
    debugger;
    let StartNum=Number(document.getElementById("txtStartNum").value);
    let EndNum=Number(document.getElementById("txtEndNum").value);
    let InputNum=Number(document.getElementById("txtInputNum").value);
 

    for(i=StartNum;i<EndNum;i++){
        alert(i*InputNum);
    }

}