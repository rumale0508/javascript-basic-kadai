let num = Math.floor(Math.random() * 30) + 1;
console.log(num);

if (num == 0) {
    console.log(num);
} else if ((num % 3 == 0) && (num % 5 == 0)) {
    console.log('3と5の倍数です')
} else if (num % 3 == 0) {
    console.log('3の倍数です');
} else if (num % 5 == 0) {
    console.log('5の倍数です');
} else {
    console.log(num);
}