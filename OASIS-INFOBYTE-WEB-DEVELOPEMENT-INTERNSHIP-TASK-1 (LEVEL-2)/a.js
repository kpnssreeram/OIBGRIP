function getInputValue() {
    let input = event.target.innerText
    console.log(input);
    printValue(input);
}

let buttons = document.getElementsByTagName('button');
console.log(buttons.length);
for (var i = 0; i < buttons.length; i++) {
    buttons[i].setAttribute('onclick', 'getInputValue()');
}

function printValue(val) {
    let out = document.querySelector("#in-box");
    let out1=document.querySelector("#right");
    let current = out.innerHTML;
    if (out.innerHTML == "0") {

        if (val != "clear" && val != "del") {
            out.innerHTML = "";
            out.innerHTML += val;
        }
    } else {
        if (val == "del") {
            console.log(current[current.length - 1]);
            out.innerText = current.slice(0, -1);
            if (out.innerHTML.length <= 1) {
                out.innerHTML = "0";
            }
        }
        if(val=='√'){
            out1.innerHTML=Math.sqrt(current);
        }
        if (val != "clear" && val != "del" && val != "ENTER") {
            out.innerHTML += val;
        }
        if (val == "ENTER") {
            let res = out.innerHTML;
            out1.innerHTML = eval(res);
        }
        if (val == "clear") {
            out.innerHTML = "0";
            out1.innerHTML = "";
        }
        if(val=="00"){
            out.innerHTML *=1;
        }
    }

}

console.log(eval("(2+2)*2"));