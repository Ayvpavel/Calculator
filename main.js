const resultElement = document.getElementById(`result`)
const input = document.getElementById(`input`)
const input2 = document.getElementById(`input2`)
const submitBtn = document.getElementById(`submit`)
const plusBtn = document.getElementById(`plus`)
const minusBtn = document.getElementById(`minus`)
const divisionBtn = document.getElementById(`division`)
const multiplicationBtn = document.getElementById(`multiplication`)
const numbers = []
let submitcount = 0

let action = ``
let sum = 0
let number2 = 0

// input1.addEventListener()

function even(name,plus) 
{
    console.log(name,plus)
} 
// even("123",143)
// let name = "123"
// let plus = "143"


// console.log(input1.value)
// console.log(resultElement.textContent)
// resultElement.textContent = 88
// // console.log(typeof sum)


plusBtn.onclick = function( ) {
    action = `+`
    
    if(input.value!=="") {
        sum = Number(input.value) + sum
    }
    console.log(input.value,"перед сброса велиу")
    input.value = ""
    console.log(sum,"Первый цифр")
    console.log(input.value,"после сброса велиу")
    }

    
submitBtn.onclick = function( ) {
    submitcount = submitcount + 1
    console.log(submitcount)
}


minusBtn.onclick = function( ) {
    action = `-`
}

multiplicationBtn.onclick = function( ) {
    action = `*`
    
}

divisionBtn.onclick = function( ) {
    action = `/`
}

// submitBtn.onclick = function () {

//     if (action == `+`) {
//         const sum = Number(input1.value) + Number(input2.value)
//         input1.value = sum
//     }
//     if (action == `-`) {
//         const sum = Number(input1.value) - Number(input2.value)
//         resultElement.textContent = sum
//     }
//     if (action == `*`) {
//         const sum = Number(input1.value) * Number(input2.value)
//         resultElement.textContent = sum
//     }
//     if (action == `/`) {
//         const sum = Number(input1.value) / Number(input2.value)
//         resultElement.textContent = sum
//     }
// }
