let doanhso = +prompt('Nhập doanh số bán hàng');
let a = doanhso*(1/10);
let b = doanhso*(2/10);
let c = doanhso*(1/2);
if (1000000<doanhso<=10000000){
    alert('Hoa hồng bạn nhận được là' + a)
}else if(10000000<doanhso<=100000000){
    alert('Hoa hồng bạn nhận được là' + b)
}else if(100000000<doanhso>=1000000000){
    alert('Hoa hồng bạn nhận được là' + c)
}else{
    alert('Bạn bị xa cmnr thải');
}