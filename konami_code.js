// const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
//
// let input = document.querySelector('body');
// let index = 0;
// //let code_sequence = []
//
// function init() {
//   input.addEventListener('keydown', function(e) {
//   //code_sequence.push(e.which)
//   if (e.which === code[index]) {
//     index++;
//
//     if (index === code.length) {
//       alert("Power Up Activated!");
//
//       index = 0;
//     }
//
//   } else {
//     index = 0;
//   }
// });
// }

const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

function init() {
  let index = 0;

  document.body.addEventListener('keydown', function(e) {
    const key = parseInt(e.which || e.detail);

    if (code[index] === key) {
      index++;

      if (index === code.length) {
        alert('Hurray!');

        index = 0;
      }
    } else {
      index = 0;
    }
  });
}
