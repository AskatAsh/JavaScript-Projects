const output = document.querySelector(".output");
const input = document.getElementById("num-input");
const increaseButton = document.getElementById("increase-btn");
const decreaseButton = document.getElementById("decrease-btn");
const resetButton = document.getElementById("reset-btn");


increaseButton.addEventListener('click', ()=>{
    output.textContent = +output.textContent + input.valueAsNumber;
    console.log(outputValue);
})

decreaseButton.addEventListener('click', ()=>{
    output.textContent = parseInt(output.textContent) - parseInt(input.value);
    console.log(outputValue);
})

input.addEventListener('change', ()=>{
    const inputNum = input.valueAsNumber;
    if(Number.isNaN(inputNum) || inputNum < 0){
        input.value = 1;
    }
})

resetButton.addEventListener('click', ()=>{
    output.textContent = "0";
})