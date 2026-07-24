function onClickCheck(){
    debugger;
    let StartNum=Number(document.getElementById("txtStartNum").value);
    let Endingnum=Number(document.getElementById("txtEndNum").value);
    if(StartNum%2==0){
        StartNum=StartNum+1
    }
    let i=StartNum;
    sum=0;
    while(i<=Endingnum){
        sum=sum+i;
        i=i+2;

    }

    alert(sum);
        
    
}