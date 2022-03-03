// 06-objects/01-generate-object/script.js - 6.1: genererate an object


(() => {
    // your code here

    let me = {
        lastname: "Delcroix",
        firstname: "Philippe",
        age: 23,
        city:"Namur",
        country: "Belgium",
    }

    document.getElementById("run").addEventListener("click", () => {
        alert(me.lastname + me.firstname + me.age + me.city + me.country)
    })

})();
