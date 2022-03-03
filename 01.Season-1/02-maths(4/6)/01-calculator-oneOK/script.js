
// 02-maths/01-calculator-one/script.js - 2.1: calculator1

(() => {
    // to get the value of an input: document.getElementById("element-id").value
    let opOne = document.getElementById("op-one");
    let opTwo = document.getElementById("op-two");

    document.getElementById("addition").addEventListener("click", function() {
        // perform an addition
        let add = parseFloat(opOne.value) + parseFloat(opTwo.value);
        alert(add)
    });

    document.getElementById("substraction").addEventListener("click", function() {
        // perform an substraction
        let sub = parseFloat(opOne.value) - parseFloat(opTwo.value);
        alert(sub)
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        // perform an multiplication
        let mul = parseFloat(opOne.value) * parseFloat(opTwo.value);
        alert(mul)
    });

    document.getElementById("division").addEventListener("click", function() {
        // perform an division
        let div = parseFloat(opOne.value) / parseFloat(opTwo.value);
        alert(div)
    });
})();
