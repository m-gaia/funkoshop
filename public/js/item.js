//botones
const add = document.querySelector('#add');
const subtract = document.querySelector('#subtract');

//cantidad
const quantity = document.querySelector('#quantity');

// console.log (add, subtract, quantity);

add.addEventListener('click', () => {
    quantity.value = Number(quantity.value) + 1;
});

subtract.addEventListener('click', () => {
    if (quantity.value > 0) {
        quantity.value = Number(quantity.value) - 1
    }
 });


// add.addEventListener('click', () => quantity.value = Number(quantity.value) + 1);
// subtract.addEventListener('click', () => {
//   quantity.value = Number(quantity.value) === 0
//     ? 0
//     : Number(quantity.value) - 1
// });
// quantity.addEventListener('change', () => quantity.value = Number(quantity.value) < 0 && 0);



