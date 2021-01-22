// document.querySelector('.clear-tasks').addEventListener('click', function(e){
//   console.log('Hello World');

//   //e.preventDefault();
// });

const buttonClear = document.querySelector('.clear-tasks');

// callback
buttonClear.addEventListener('click', btnClick);
// buttonClear.addEventListener('dblclick', btnClick);
// buttonClear.addEventListener('mouseover', btnClick);

function btnClick(e) {
  console.log(e.target.getAttribute('href'));
  console.log("type d'evenement", e.type);

  console.log('ClientX', e.clientX);
  console.log('ClientY', e.clientY);

  // changer la coleur
  const body = document.body;
  const clientX = e.clientX;
  const clientY = e.clientY;

  // body.style.background = 'rgb(60,176,113)';
  // body.style.background = 'rgb(60,' + e.clientX + ',' + e.clientY + ')';
  body.style.background = `rgb(60, ${clientX}, ${clientY})`;
  // template literal ``
  // body.style.background = 'rgb(60,' + e.clientX + ',' + e.clientY + ')';
  // ajouter 'btn-block' class
  e.target.classList.add('btn-block');
  e.target.classList.remove('black');
  e.target.classList.add('red');
}

// function onClick(e) {
//   //console.log('Clicked');

//   let val;

//   val = e;

//   // Event target element
//   val = e.target;
//   val = e.target.id;
//   val = e.target.className;
//   val = e.target.classList;

//   // Event type
//   val = e.type;

//   // Timestamp
//   val = e.timeStamp;

//   // Coords event relative to the window
//   val = e.clientY;
//   val = e.clientX;

//   // Coords event relative to the element
//   val = e.offsetY;
//   val = e.offsetX;

//   console.log(val);
// }
