// calc one
let num1;
let num2;
let add = document.getElementById("radio-add");
let sub = document.getElementById("radio-sub");
let mult = document.getElementById("radio-mult");
let divid = document.getElementById("radio-divid");
let result = document.getElementById("result");
function calc() {
    num1 =  document.getElementById("num1").value; 
    num2 = document.getElementById("num2").value; 
    if (add.checked == true){
        result.innerHTML = +num1 + +num2; 
    }
    else if (sub.checked == true){
        result.innerHTML = +num1 - +num2;
    } else if (mult.checked == true) {
        result.innerHTML = +num1 * +num2;
    }else if (divid.checked == true){
        result.innerHTML = +num1 / +num2;
    }else if (num1==0 || num2==0){
        result.innerHTML = "change value"
    }
    else{
        result.innerHTML = "No operator is selected";
    }
}
function rest() {
    num1 = document.getElementById("num1").value = ""; 
    num2 = document.getElementById("num2").value = "";
    result.innerHTML = ""; 
}
// calc two
let resultTwo = document.getElementById("result_two");
function copyToP(val) {
  resultTwo.innerHTML+=val;
}
function doOperate() {
    console.log(eval(resultTwo.innerText));
    resultTwo.innerHTML = (eval(resultTwo.innerText));
    document.getElementById("history").innerHTML += (eval(resultTwo.innerText)) + `<hr>`;
}
function rest2(){
    document.getElementById("result_two").innerHTML = "";
}
function rest_History(){
    document.getElementById("history").innerHTML = "";
}
// change view

let calc1 = document.getElementById("cotainer1");
let calc2 = document.getElementById("second_calc")
let btn1switch = document.getElementById("switch_calc")
let btn2switch = document.getElementById("switch_calc2")
function changeView() {
    if (calc1.style.display="none"){
        calc1.style.display="block";
        calc2.style.display="none";
        btn1switch.style.display="none";
        btn2switch.style.display="block";
    }
}
function changeView2 () {
    if (calc2.style.display="none") {
        calc2.style.display="grid";
        calc1.style.display="none";
        btn2switch.style.display="none";
        btn1switch.style.display="block";
    }
}


