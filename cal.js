function keyPadClickHandler(event) {
    var pressedKeyText = getPressedKeyFromEvent(event);  
     document.getElementById("display").innerText += pressedKeyText;
    
};

function getPressedKeyFromEvent(event) {
    return event.currentTarget.innerText;
};
function add(LeftOperand, RightOperand){
    var total = Number(LeftOperand) + Number(RightOperand);
    document.getElementById("display").innerText = total;
};

function subtract(LeftOperand, RightOperand){
    var total = Number(LeftOperand) - Number(RightOperand);
    document.getElementById("display").innerText = total;
};

function multiply(LeftOperand, RightOperand){
    var total = Number(LeftOperand) * Number(RightOperand);
    document.getElementById("display").innerText = total;
};

function divid(LeftOperand, RightOperand){
    var total = Number(LeftOperand) / Number(RightOperand);
    document.getElementById("display").innerText = total;
};

function percent(LeftOperand, RightOperand){
    var total = Number(LeftOperand) % Number(RightOperand);
    document.getElementById("display").innerText = total;
};

function evaluateValues() {
    var EnteredValues = document.getElementById("display").innerText;
    if (EnteredValues.includes("+")){
        var LeftOperand = EnteredValues.substring(0, EnteredValues.indexOf("+"));
        var RightOperand = EnteredValues.substring(EnteredValues.indexOf("+")+1);
       return Execute(LeftOperand, RightOperand, add);
    }
    else if (EnteredValues.includes("-")){
        var LeftOperand = EnteredValues.substring(0, EnteredValues.indexOf("-"));
        var RightOperand = EnteredValues.substring(EnteredValues.indexOf("-")+1);
        return Execute(LeftOperand, RightOperand, subtract);
    }
    else if (EnteredValues.includes("*")){
        var LeftOperand = EnteredValues.substring(0, EnteredValues.indexOf("*"));
        var RightOperand = EnteredValues.substring(EnteredValues.indexOf("*")+1);
        return Execute(LeftOperand, RightOperand, multiply);
    }
    else if (EnteredValues.includes("/")){
        var LeftOperand = EnteredValues.substring(0, EnteredValues.indexOf("/"));
        var RightOperand = EnteredValues.substring(EnteredValues.indexOf("/")+1);
        return Execute(LeftOperand, RightOperand, divid);
    }
    else if (EnteredValues.includes("%")){
        var LeftOperand = EnteredValues.substring(0, EnteredValues.indexOf("%"));
        var RightOperand = EnteredValues.substring(EnteredValues.indexOf("%")+1);
        return Execute(LeftOperand, RightOperand, percent);
    }
};

function Execute(LeftOperand, RightOperand, callback){
    return callback(LeftOperand, RightOperand)
}

function clearScreen(){
    document.getElementById("display").innerText = "";
}

function backSpace() {
    var backSpace = document.getElementById("display").innerText;
    var clear = backSpace.substring(0, backSpace.length -1);
    document.getElementById("display").innerText = clear;
}