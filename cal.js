function keyPadClickHandler(event) {
    var pressedKeyText = getPressedKeyFromEvent(event);  
    document.getElementById("display").innerHTML += pressedKeyText;
    
};

function getPressedKeyFromEvent(event) {
    return event.currentTarget.innerText;
};

function evalu() {
    var cal1 = document.getElementById("display").innerHTML;
    var calculate = eval(cal1);
    document.getElementById("display").innerHTML = calculate;
};

function clearScreen(){
    document.getElementById("display").innerHTML = "";
}

function backSpace() {
    var bspace = document.getElementById("display").innerHTML;
    var res = bspace.substring(0, bspace.length -1);
    document.getElementById("display").innerHTML = res;
}