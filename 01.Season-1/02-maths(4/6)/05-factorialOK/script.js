
// 02-maths/05-factorial/script.js - 2.5: Factorial

(() => {
    
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", () => {

        // your code here

        let number = document.getElementById("number").value;
        for (i = number - 1; i >= 1; i--) {
            number *= i;
        }
        alert(number)

    });

})();
