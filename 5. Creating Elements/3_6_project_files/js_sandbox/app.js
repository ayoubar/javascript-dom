// Create element
const li = document.createElement('li');

// // Add class
li.className = 'collection-item';
// li.classList.add('collection-item')

// // Add id
li.id = 'new-item';

/*
 <li class="collection-item" id="new-item"></li>
*/

// // Add attribute
li.setAttribute('title', 'New Item');

/*
 <li class="collection-item" id="new-item" title="New item"></li>
*/
// // Create text node and append
// let text = document.createTextNode("FE LIVe ")
li.innerHTML = `
    <a href="#" class="delete-item secondary-content">  
<i class="fa fa-remove"></i>
</a>
`;
li.appendChild(document.createTextNode('Hello World'));

document.querySelector('.collection').appendChild(li);

// // Create new link element
// const link = document.createElement('a');
// // Add classes
// link.className = 'delete-item secondary-content';
// // Add icon html
// link.innerHTML = '<i class="fa fa-remove"></i>';

// // Append link into li
// li.appendChild(link);

// // Append li as child to ul

// console.log(li);

// const div = document.createElement('div');

// div.classList.add('mt-5');
// div.id = 'fe-id';
// const text = document.createTextNode(
//   'Hello Every one , i created this division'
// );

// div.appendChild(text);

// document.getElementById('create').appendChild(div);
