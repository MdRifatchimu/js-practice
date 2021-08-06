const principal = 100;
const time = 1;
const rate = .05;
const n = 12;
const compoundInterest = (p, t, r, n) => {
   const amount = p * (Math.pow((1 + (r / n)), (n * t)));
   const interest = amount - p;
   return interest;
};
console.log(compoundInterest(principal, time, rate, n));
