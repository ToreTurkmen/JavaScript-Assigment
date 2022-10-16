// console.log(document.title);
// document.title = 123;

// console.log(document.getElementById('main-contact'));

var mainContact = document.getElementById('main-contact');
console.log(mainContact);
mainContact.textContent = 'Contact Us';
mainContact.style.borderBottom = '2px solid black';


var contact = document.getElementsByClassName('col');
console.log(contact);
console.log(contact[1]);
contact[1].textContent = 'First Name';
contact[2].textContent = 'Last Name';
contact[3].textContent = 'Email';
contact[0].style.backgroundColor = 'yellow'
contact[2].style.backgroundColor = 'yellow'

var contact = document.getElementsByClassName('row-one');
contact[0].textContent = 'Tore ';
contact[1].textContent = 'Turkmen';
contact[2].textContent = 'toreturkmen@gmail.com';
contact[2].style.backgroundColor = 'orange'

var contact = document.getElementById('row-1');
contact.style.backgroundColor = 'yellow'

var contact = document.getElementsByClassName('row-two');
contact[0].textContent = 'Murat ';
contact[1].textContent = 'Beg';
contact[2].textContent = 'muratbeg@gmail.com';
var contact = document.getElementById('row-2');
contact.style.backgroundColor = 'red'


var contact = document.getElementsByClassName('row-three');
contact[0].textContent = 'Ahmet ';
contact[1].textContent = 'Ali';
contact[2].textContent = 'ahmetali@gmail.com';
var contact = document.getElementById('row-3');
contact.style.backgroundColor = 'green'

//gallery
var gallery = document.getElementsByClassName('alert');
 for(var i = 0; i < gallery.length; i++) {
  gallery[i].style.backgroundColor = 'blue';
 }




var itemList = document.querySelector('.alert');
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = 'yellow';

var newDiv = document.createElement('div');

//add a class
newDiv.className = 'hello';

//add a id
newDiv.id = 'hello 1';

//add a attr
newDiv.setAttribute('title', 'Hello Div');

//create a text node
var newDivText = document.createTextNode('About Amsterdam');

//add a text div
newDiv.appendChild(newDivText);

var cardBody = document.querySelector('div .card-body');

var h5 = document.querySelector('div h5');
newDiv.style.color = 'blue';
newDiv.style.fontSize = '30px';

console.log(newDiv);

cardBody.insertBefore(newDiv,h5);

//button
var button = document.getElementById('button').addEventListener('click', buttonClick);

function buttonClick(){
  document.getElementById('title').textContent = 'Nederland';
  
}


var button = document.getElementById('button');
var box = document.getElementById('box');

// button.addEventListener('click', runEvent);
// button.addEventListener('dblclick', runEvent);
// button.addEventListener('mousedown', runEvent);
box.addEventListener('mousemove', runEvent);

function runEvent(e){
  console.log('EVENT TYPE: '+e.type);

  // output.innerHtml = '<h3>MouseX: '+e.offsetX+' </h3><h3>MouseY: '+e.offsetY+'</h3>';
  // box.style.backgroundColor = "rgb("+e.offsetX+", "+e.offsetY+", 40)";
  document.body.style.backgroundColor = "rgb("+e.offsetX+", "+e.offsetY+", 40)";


}




 

