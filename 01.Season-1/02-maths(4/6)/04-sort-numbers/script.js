// 02-maths/04-sort-numbers/script.js - 2.4: Sorting the numbers

(() => {

    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", () => {

        // your code here

        let numbers = document.getElementById("numbers").value;
        let numbersArray = [numbers];
        let sortedNumber = numbersArray.sort((a, b) => a - b);
        alert(sortedNumber)
        

    });

})();
