let start = +prompt("nhap so bat dau");
let num = +prompt("nhap so luong");
let count = 0;
function checkNum(n) {
   return (n%3 ===0);
}

while (count<num){
    if (checkNum(start)){
        count+=1;
        document.write(start+" ");
    }
    start+=1;
}