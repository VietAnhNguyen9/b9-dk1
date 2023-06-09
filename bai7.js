let tiendt = +prompt('Nhập số tiền');
let a =+ tiendt-(tiendt*1/10);
if (tiendt<100000){
    alert('Cước điện thoại là '+tiendt);
}else{
    alert('Cước điện thoai của bạn là '+ a);
}