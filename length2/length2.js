function onClicklength(){
    debugger;
     let Description=document.getElementById("txtDescription").value;
     Descriptionlength= Description.length;
    document.getElementById("pResult").innerText = Descriptionlength + "/200";

    if (Descriptionlength >  200){
        document.getElementById("pResult").style.color="red";
        Description=Description.substring(0,200);
        document.getElementById("txtDescription").value=Description;
        document.getElementById("pResult").innerText=Description.length + "/200";
    }
}