function add(){
    let firnum = document.getElementById("first").value;
    let secnum = document.getElementById("second").value;
    let output = Number(firnum)+Number(secnum)
    document.getElementById("msg").innerText = `the sum of given number i${output}`
    console.log(`result ${output}`)
}
function equ(){
    let firnum = document.getElementById("first").value;
   
    let output = eval(`${firnum}`)
   
    document.getElementById("first").value = `${output}`

    // console.log(`result ${output}`)
}
function num1(){
    let firnum = document.getElementById("first").value;
  
    document.getElementById("first").value = `${firnum}1`
    // console.log(`result ${output}`)
}
function num2(){
    let firnum = document.getElementById("first").value;
   
    document.getElementById("first").value = `${firnum}2`
    // console.log(`result ${output}`)
}
function num3(){
    let firnum = document.getElementById("first").value;
   
    document.getElementById("first").value = `${firnum}3`
    // console.log(`result ${output}`)
}
function num4(){
    let firnum = document.getElementById("first").value;
  
    document.getElementById("first").value = `${firnum}4`
    // console.log(`result ${output}`)
}
function num5(){
    let firnum = document.getElementById("first").value;
   
    document.getElementById("first").value = `${firnum}5`
    // console.log(`result ${output}`)
}
function num6(){
    let firnum = document.getElementById("first").value;

    document.getElementById("first").value = `${firnum}6`
    // console.log(`result ${output}`)
}
function num7(){
    let firnum = document.getElementById("first").value;
   
    document.getElementById("first").value = `${firnum}7`
    // console.log(`result ${output}`)
}
function num8(){
    let firnum = document.getElementById("first").value;
   
    document.getElementById("first").value = `${firnum}8`
    // console.log(`result ${output}`)
}
function num9(){
    let firnum = document.getElementById("first").value;
  
    document.getElementById("first").value = `${firnum}9`
    // console.log(`result ${output}`)
}
function num0(){
    let firnum = document.getElementById("first").value;
   
    document.getElementById("first").value = `${firnum}0`
    // console.log(`result ${output}`)
}
function dote(){
    let firnum = document.getElementById("first").value;
   
    document.getElementById("first").value = `${firnum}.`
    // console.log(`result ${output}`)
}
function plus(){
    let firnum = document.getElementById("first").value;
   
    document.getElementById("first").value = `${firnum}+`
    // console.log(`result ${output}`)
}
function minus(){
    let firnum = document.getElementById("first").value;
   
    document.getElementById("first").value = `${firnum}-`
    // console.log(`result ${output}`)
}
function multi(){
    let firnum = document.getElementById("first").value;
   
    document.getElementById("first").value = `${firnum}*`
    // console.log(`result ${output}`)
}
function div(){
    let firnum = document.getElementById("first").value;
   
    document.getElementById("first").value = `${firnum}/`
    // console.log(`result ${output}`)
}
function mod(){
    let firnum = document.getElementById("first").value;
   
    document.getElementById("first").value = `${firnum}%`
    // console.log(`result ${output}`)
}
function clr(){
    let firnum = document.getElementById("first").value;
   
    document.getElementById("first").value = ""
    // console.log(`result ${output}`)
}
function del(){
    let firnum = document.getElementById("first").value;
    let delres =firnum.slice(0,-1);
    document.getElementById("first").value = delres
}    