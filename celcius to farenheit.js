// cel to far 
function celToFr(farenheit) {
    var cel = farenheit * 9/5 + 32;
    return cel;
}

var celcius = celToFr(0);
console.log('celcius to farenheit: ', celcius);


// far to cel
function farToCel(celcius) {
    var far = (celcius - 32) * 5/9 ;
    return far;
}

var Farenheit = farToCel(0);
console.log('farenheit to celcius : ', Farenheit);
