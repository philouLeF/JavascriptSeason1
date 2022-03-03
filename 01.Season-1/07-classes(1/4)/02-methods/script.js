//07-classes/02-methods/script.js - 7.2: methods


(() => {
    // your code here

    class Person {
        constructor (firstname, lastname) {
            this.firstname = firstname;
            this.lastname = lastname;
        }
        sayHello() {
            alert("Hello " + constructor.this.firstname)
        }
    }

    document.getElementById("run").addEventListener("click", () => {
        let me = new Person 
        new me.constructor("Philippe", "Delcroix")
        alert(me.sayHello)
    })

})();
