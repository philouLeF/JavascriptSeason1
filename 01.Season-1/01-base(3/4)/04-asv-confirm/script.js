
// 01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation

(() => {
    // Don't bother with that, look at your browser's console(chrome), you can delete it afterwards ;)
    console.log('%c ', 'padding: 38px; background:url(https://becode.org/app/uploads/2020/03/bc_mailsign_seal.png) no-repeat;');
    console.log('Hello Keller programmer');

    // YOUR CODE HERE
    function questions() {
    let userAge = prompt("How old are you ?");
    let userGender = prompt("What is your gender ?");
    let userCity = prompt ("Where do you live ?");
    let confirm = prompt("So you are " + userAge + " years old, you define yourself as " + userGender + " and you live in " + userCity + ", is that right ? (please answer 'yes' or 'no')");
    }
})();
