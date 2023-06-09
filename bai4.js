let a = +prompt('Nhập số thứ nhất');
let b = +prompt('Nhập số thứ 2');
let c = +prompt('Nhập số thứ 3');
let max = a;
if (b > max){
 if (c > max){
 alert('Số thứ 3 là số lớn nhất');
 }else{
     alert('Số thứ 2 là số lớn nhất');
 }
}else{
    alert('Số thứ nhất là số lớn nhất');
}