
const rooms = prompt('Enter number of rooms');

let subtotal = 0;

for (let item of cart) {

    let total = calculateTotal(rooms, item.product.price);

    subtotal += total;
    outputCartRow(item, total, rooms);

}

const tax = calculateTax(subtotal, 0.19);
const shipping = calculateShipping(subtotal);
const grand = calculateGrandTotal(subtotal, tax, shipping);