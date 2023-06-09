let a = +prompt('Điểm bài kiểm tra');
let b = +prompt('Điểm thi giữa kỳ');
let c = +prompt('Điểm thi cuối kỳ');
let d = (a + b + c)/3;
if (d >= 8){
    alert('Học lực  giỏi');
}else if(8 > d > 6.5){
    alert('Học lực khá');
}else{
    alert('Học dốt');
}