function calcularPrecioCDescuento(precio, descuento){
    const porcentajePrecioCDescuento = 100 - descuento;
    const precioCDescuento = (precio * porcentajePrecioCDescuento) / 100;

    return precioCDescuento;
}

//Price Discount

function buttonPriceDiscount(){
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("inputDiscount");
    const discountValue = inputDiscount.value;

    const precioCDescuento = calcularPrecioCDescuento(priceValue, discountValue);

    const resultP = document.getElementById("resultPrice");
    resultP.innerText = "El precio final es $" + precioCDescuento;
}
