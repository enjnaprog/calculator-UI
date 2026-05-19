var display = document.getElementById("display")

function enterValue(input) {
    display.value += input;
}

function clearValue(){
    display.value = ''
}

function deleteLast() {
        display.value = display.value.slice(0, -1);
}

function equalValue(){
    try{
    display.value = eval(display.value);
    }
    catch(error){
        display.value = 'Error'
    }
}