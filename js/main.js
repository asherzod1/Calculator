let input = document.querySelector('.input');

let qiymat1 = '';
let qiymat2 = '';
let amall = '';
function qiymat(e) {
    document.querySelector('.input').value += e;
}

function amal(a){
    qiymat1 = document.querySelector('.input').value;
    amall = a;
    document.querySelector('.input').value = '';    
}

function hisobla(){
    qiymat2 = document.querySelector('.input').value;
    switch(amall){
        case '+': document.querySelector('.input').value = parseFloat(qiymat1) + parseFloat(qiymat2);
            break;
        case '-': document.querySelector('.input').value = parseFloat(qiymat1) - parseFloat(qiymat2);
            break;
        case '*': document.querySelector('.input').value = parseFloat(qiymat1) * parseFloat(qiymat2);
            break;
        case '/': document.querySelector('.input').value = parseFloat(qiymat1) / parseFloat(qiymat2);
            break;
        case '%': document.querySelector('.input').value = parseFloat(qiymat1)/100 * parseFloat(qiymat2);
            break;
    }
    
}

function tozalash (){
    document.querySelector('.input').value = '';
}

function ochirish(){
    let a = document.querySelector('.input').value;
    let b = parseInt(parseInt(a)/10);
    document.querySelector('.input').value = b;
}