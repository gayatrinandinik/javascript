function onClickSubmit(){
    debugger;
    let Name=document.getElementById("txtName").value;
    let Age=document.getElementById("txtAge").value;
    let City=document.getElementById("txtCity").value;
   document.getElementById("pResult").innerHTML = `My name is ${Name}. I am ${Age} years old. I live in ${City}.`;
}