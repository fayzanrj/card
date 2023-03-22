let cardNameInput = document.getElementById('name');
let cardNumberInput = document.getElementById('number');
let expDateM = document.getElementById('m');
let expDateY = document.getElementById('y');
let cvcInput = document.getElementById('cvc');
let btn = document.getElementById('btn');

let cardName = document.getElementById('h-name');
let cardNumber = document.getElementById('card-no');
let expDCard = document.getElementById('exp-d');
let expDCardY = document.getElementById('exp-d-y');
let cvcCard = document.getElementById('card-cvc');

cardNumberInput.addEventListener('keyup', (e) => {
    let valueString;
        if (e.keyCode >= 48 && e.keyCode <= 57 || e.keyCode == 8) {
            let value;
            valueString = cardNumberInput.value;
            let valueString2 = "";
            let valueInt = parseInt(valueString);

            for (let i = 0; i < valueString.length; i++) {
                if (valueString[i] >= '0' && valueString[i] <= '9') {
                    valueString2 += valueString[i];
                }
            }
            cardNumberInput.value = valueString2

            if (valueString.length <= 16) {
                value = 16 - valueString.length;
                if (value >= 0) {
                    for (let i = 0; i < value; i++) {
                        valueString += '0';
                    }
                    cardNumber.innerHTML = valueString[0] + valueString[1] + valueString[2] + valueString[3] + '&ensp;' +
                        valueString[4] + valueString[5] + valueString[6] + valueString[7] + '&ensp;' +
                        valueString[8] + valueString[9] + valueString[10] + valueString[11] + '&ensp;' +
                        valueString[12] + valueString[13] + valueString[14] + valueString[15];
                }
            }
        } else {
            valueString = cardNumberInput.value;
            let valueString2 = "";
            for (let i = 0; i < valueString.length; i++) {
                if (valueString[i] >= '0' && valueString[i] <= '9') {
                    valueString2 += valueString[i];
                }
            }
            cardNumberInput.value = valueString2
        }
})

cardNameInput.addEventListener('keyup', () => {
    let name = cardNameInput.value;

    if (name.length < 30) {
        cardName.innerHTML = name.toUpperCase();
    }
})

cvcInput.addEventListener('keyup', (e) => {
        if (e.keyCode >= 48 && e.keyCode <= 57 || e.keyCode == 8) {
            let cvc = cvcInput.value;
            let cvcLength = 3 - cvc.length
    
            for (let i = 0; i < cvcLength; i++) {
                cvc += '0';
            }
            if (cvc.length <= 3) {
                cvcCard.innerHTML = cvc;
            }
        }
})

expDateM.addEventListener('keyup', () => {
    let m = expDateM.value;
    if(m == '0'){
        expDateM.value == ""
    }

    if (m <= 12) {
        if (m[0] != 1 && m[0] != 0 && m != ""){
            m = '0' + m
            expDateM.value = m;
        }
        if (m.length <= 2) {
            expDCard.innerHTML = `${m}`
        }
    } else {
        expDCard.innerHTML = `12`
    }

    if (m == "" || m == "0") {
        expDCard.innerHTML = `MM`
    }
})


expDateY.addEventListener('keyup', () => {
    let y = expDateY.value
    if (y == "") {
        expDCardY.innerHTML = "YY"
    }
    if (y.length <= 4 && y != "") {


        if (y.length == 1) {
            expDCardY.innerHTML = y[0]
        } else if (y.length == 2) {
            expDCardY.innerHTML = y[0] + y[1]
        } else if (y.length == 3) {
            expDCardY.innerHTML = y[1] + y[2]
        } else {
            expDCardY.innerHTML = y[2] + y[3]
        }
    }
})