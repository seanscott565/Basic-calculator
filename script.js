const input1 = document.getElementById("input1")
const input2 = document.getElementById("input2")
const output = document.getElementById("output")


function add(){
  output.value = parseInt(input1.value) + +input2.value;
}

function sub(){
  output.value = +input1.value - +input2.value;
}

function multi(){
  output.value = +input1.value * +input2.value;
} 

function div(){
  if(+input1.value !== 0){
    output.value = +input1.value / +input1.value
  }
}
