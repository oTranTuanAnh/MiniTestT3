let arr = [0, 2, -3, 52, -4, 6, 10, 2];
let result =[];

function checkArr(arr, result) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]>0){
            result.push(arr[i]);
        }
    }
    return result;

}

document.write(checkArr(arr,result));
