function onClickCheck(){
    debugger;
    let StartNum=Number(document.getElementById("txtStartNum").value);
    let EndNum=Number(document.getElementById("txtEndNum").value);
    let Name=document.getElementById("txtName").value;
    let i=StartNum;
    while(i<=EndNum){
        alert( Name.repeat(i))
       i= i+1;
    }
}