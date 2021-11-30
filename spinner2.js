
let sign = ['\r|   ','\r/   ','\r-   ','\r\\   ','\r|   ','\r/   ','\r-   ', '\r\\   ']
let delay = 0;
let increment = 500;
for (let i=0; i < sign.length ; i++) {
  setTimeout(() => {
    process.stdout.write(sign[i])
  }, delay);
  delay += increment;
}


// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 1000);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 3000);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 5000);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   '); 
// }, 7000);

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 9000);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 11000);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 13000);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   '); 
// }, 15000);

