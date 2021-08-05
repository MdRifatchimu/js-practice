//for loop even odd numbers from 50-80
// for (var x=50; x<=80; x++) {
//     if (x % 2 == 0) {
//             console.log(x);   
//     }
  
// }
// for (var x=50; x<=80; x++) {
//     if (x % 2 == 1) {
//             console.log(x);   
//     }
  
// }
// getting odd even of 50-80 using while loop 
var even = 50;
while (even <= 80){
    even++; //eikhane even++ diyechi cz 52 theke print korbo even number
    if(even % 2 == 0){
        console.log(even)
    }
    //or else eikhane even++ likbo jodi 50 theke print korte chai.
}
var odd = 50;
while (odd <= 80){
    if(odd % 2 == 1){
        console.log(odd)
    }
    odd++;
}
