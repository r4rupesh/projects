let input = [...document.querySelectorAll("input")];
let button = document.querySelector('button');
console.log(input);

input.forEach(element => {
    element.addEventListener('keyup', () => {
        if (input.indexOf(element) + 1 != input.length) {
            input[input.indexOf(element) + 1].focus();
        }
    });
});


button.addEventListener('click', () => {
    window.location.reload();
    });


