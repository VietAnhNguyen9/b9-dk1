let a = +prompt('Nhập số bất kỳ');
let b = (a < 0) ? 'Số này nhỏ hơn 0' : (a == 0) ?
    'Số này bằng 0' : (a > 0) ? 'Số này lớn hơn 0' : ''
alert(b)