function onClickSubmit(){
    debugger;
    var Name=document.getElementById("txtName").value;
    let i=0;
    while(i<10){
        alert(`${i+1} time ${Name}`   );
        i=i+1;
    }
}