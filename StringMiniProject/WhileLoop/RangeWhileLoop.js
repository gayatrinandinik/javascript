function onClickSubmit(){
    debugger;
    var StartNum=document.getElementById("txtStart").value;
    var EndNum=document.getElementById("txtEnd").value;
    let i=StartNum;
    while(i<EndNum){
        alert('${i+1}  time ${StartNum,EndNum}'   );
    }
}