// document.getElementById()

// console.log(document.getElementById('task-title'));

// // Get things from the element
// console.log(document.getElementById('task-title').id);
// console.log(document.getElementById('task-title').className);

// const taskTitle = document.getElementById('task-title');

// // Change styling
// taskTitle.style.background = '#333';
// taskTitle.style.color = '#fff';
// taskTitle.style.padding = '5px';
// // taskTitle.style.display = 'none';

// // Change content
// taskTitle.textContent = 'Task List';
// taskTitle.innerText = 'My Tasks';
// taskTitle.innerHTML = '<span style="color:red">Task List</span>';

// document.querySelector()

// console.log(document.querySelector('#task-title'));
// console.log(document.querySelector('.card-title'));
// console.log(document.querySelector('h5'));

// document.querySelector('li').style.color = 'red';
// document.querySelector('ul li').style.color = 'blue';

// document.querySelector('li:last-child').style.color = 'red';
// document.querySelector('li:nth-child(3)').style.color = 'yellow';
// document.querySelector('li:nth-child(4)').textContent = 'Hello World';
// document.querySelector('li:nth-child(odd)').style.background = '#ccc';
// document.querySelector('li:nth-child(even)').style.background = '#f4f4f4';

const form = document.getElementById('task-form');
const h5 = document.getElementById('task-title');
const ul = document.querySelector('ul.collection');

/*
    textContent Vs innerText
*/

h5.textContent = 'MOHAMED';
h5.innerText = 'MEHDI';

// h5.style.color = 'dodgerblue';
// h5.style.backgroundColor = '#f4f4f4';
// h5.style.fontSize = '4rem';

h5.style = `
    color: red;
    background-color: #f4f4f4;
    font-size: 4rem
`;

const divInner = document.getElementById('inner');

divInner.innerHTML = '<h3> YOUSSRA </h3>';
