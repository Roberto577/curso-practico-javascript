const coupons = [
    "A123",
    "B123",
    "C123"
];

function calcularPrecioCDescuento(precio, descuento){
    const porcentajePrecioCDescuento = 100 - descuento;
    const precioCDescuento = (precio * porcentajePrecioCDescuento) / 100;

    return precioCDescuento;
}

function buttonPriceDiscount(){
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;

    const inputCoupon = document.getElementById("inputCoupon");
    const couponValue = inputCoupon.value;

    let descuento;

    switch(couponValue){
        case coupons[0]:
            descuento = 15;
        break;
        case coupons[1]:
            descuento = 30;
        break;
        case coupons[2]:
            descuento = 25;
        break;
    }

    const precioCDescuento = calcularPrecioCDescuento(priceValue, descuento);

    const resultP = document.getElementById("resultPrice");
    resultP.innerText = "El precio con descuento es: " + precioCDescuento;
}