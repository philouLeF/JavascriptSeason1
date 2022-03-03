// 07-classes/01-instances/script.js - 7.1: instances


(() => {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    // your code here

    let skitty = new Cat("Skitty", 9)
    let pixel = new Cat("Pixel", 6)

    document.getElementById("run").addEventListener("click", () => {
        alert(skitty.name + " is " + skitty.age + " years old")
        alert(pixel.name + " is " + pixel.age + " years old");
    })

})();
