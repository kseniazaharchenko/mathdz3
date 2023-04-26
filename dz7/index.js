let numOrStr = prompt('input number or string');
console.log(numOrStr)

switch(numOrStr === null) {
console.log('ви скасували')
} сase( numOrStr.trim() === '' ) {
console.log('Empty String');
} switch case( isNaN( +numOrStr ) ) {
console.log(' number is Ba_NaN')
} case {
console.log('OK!')
}
