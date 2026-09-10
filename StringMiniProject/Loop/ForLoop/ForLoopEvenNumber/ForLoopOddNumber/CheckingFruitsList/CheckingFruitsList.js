Fruits=[]
function onClickAdd(){
debugger;
let fruit=document.getElementById("txtFruits").value;
Fruits.push(fruit);
alert(Fruits);
document.getElementById("txtFruits").value='';
}
function onClickCheck(){
    debugger;
    let i=0
    while(i<Fruits.length){
        document.getElementById("pResultAdd").innerHTML+= `${i+1}.${Fruits[i]} <br>`
        i++
    }
}