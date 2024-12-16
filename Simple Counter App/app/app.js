/* ACCESSING THE DOM ELEMENTS*/

/*----Accessing the display----*/
let number = document.getElementById('show-number');
let display_number = parseFloat(number.textContent);
/*----Accessing all One-buttons----*/
let increase_num_by_one = document.getElementById('increase_by_one');
let decrease_num_by_one = document.getElementById('decrease_by_one');
/*----Accessing all Ten-buttons----*/
let increase_num_by_ten = document.getElementById('increase_by_ten');
let decrease_num_by_ten = document.getElementById('decrease_by_ten');
/*----Accessing all Hundred-buttons----*/
let increase_num_by_hundred = document.getElementById('increase_by_hundred');
let decrease_num_by_hundred = document.getElementById('decrease_by_hundred');
/*----Accessing the Reset button----*/
let reset_num = document.getElementById('reset');


/* CREATING THE FUNCTIONS TO INCREASE OR DECREASE*/

/*----Function to increase the count by One----*/
const increaseByOne = () => {
    display_number += 1.0
    number.innerText = display_number;
}
/*----Function to decrease the count by One----*/
const decreaseByOne = () => {
    if(display_number == 0) {
        alert("Can't be less than 0")
    } 
    else{
        display_number -= 1.0
        number.innerText = display_number;
    }
}
/*----Function to increase the count by Ten----*/
const increaseByTen = () => {
    display_number += 10.0
    number.innerText = display_number;
}
/*----Function to decrease the count by Ten----*/
const decreaseByTen = () => {
    if(display_number == 0) {
        alert("Can't be less than 0")
    } 
    else{
        display_number -= 10.0
        number.innerText = display_number;
    }
}
/*----Function to increase the count by Hundred----*/
const increaseByHundred = () => {
    display_number += 100.0
    number.innerText = display_number;
}
/*----Function to decrease the count by Hundred----*/
const decreaseByHundred = () => {
    if(display_number == 0) {
        alert("Can't be less than 0")
    } 
    else{
        display_number -= 100.0
        number.innerText = display_number;
    }
}
/*----Function to reset----*/
const reset = (num = display_number) => {
    display_number = 0;
    number.innerText = display_number;
}

/*----ADDING EVENT LISTENERS----*/

/*----Adding event listeners to One-buttons----*/
increase_num_by_one.addEventListener('click', increaseByOne);
decrease_num_by_one.addEventListener('click', decreaseByOne);
/*----Adding event listeners to Ten-buttons----*/
increase_num_by_ten.addEventListener('click', increaseByTen);
decrease_num_by_ten.addEventListener('click', decreaseByTen);
/*----Adding event listeners to Hundred-buttons----*/
increase_num_by_hundred.addEventListener('click', increaseByHundred);
decrease_num_by_hundred.addEventListener('click', decreaseByHundred);
/*----Adding event listeners to Reset-button----*/
reset_num.addEventListener('click', reset);