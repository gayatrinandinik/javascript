function onClickSum(){
    debugger;
    let Startnum=Number(document.getElementById("txtStartNum").value);
    let Endingnum=Number(document.getElementById("txtEndNum").value);
    let i=Startnum;
         sum=0;
    while(i<=Endingnum){
   
        sum=sum+i
        i++;
    }

    alert(sum);
}