
// 02-maths/03-even-square/script.js - 2.3: squares and pairs


(() => {

    document.getElementById("run").addEventListener("click", () => {

        let square = []

        for (i = 1; i <= 22; i++) {
            let squareNumbers = Math.pow(i, 2);
            square.push(squareNumbers)
        }

    alert(square)

    });

})();
