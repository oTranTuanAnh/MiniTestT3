let num = +prompt("nhap so nguyen duong bat ky");
function factorial(n) {
    let result = 1;
    if (n<0){
        result = null;
    } else if (n===0){
        return result=1;
    } else {
        for (let i = 1; i <=n; i++) {
            result = result*i;
        }
    }
    return result;
}


document.write(factorial(num));