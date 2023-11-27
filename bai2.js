let start = +prompt("nhap so bat dau");

function checkNum(n) {
   return (n%3 ===0);
}

function printEven(n) {
    let count = 0;
    let result = [];
      while (count<n){
        if (checkNum(start)){
            count+=1;
            result.push(start);
        }
        start+=1;
    }
    return result.join();
}

document.write(printEven(5));