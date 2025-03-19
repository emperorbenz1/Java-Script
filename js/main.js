// DOM Document Object Model

// SELECTORS IN JAVASCRIPT

// `querySelector` selects the first element that matches the specified CSS selector.
// document.querySelector('');

// `getElementById` selects an element by its unique ID.
// document.getElementById('');

// `querySelectorAll` selects all elements that match the specified CSS selector and returns a Nodelist
// document.querySelectorAll('');

// `getElementsByClassName` selects all elements with the specified class name and returns an HTMLCollection.
// document.getElementsByClassName('hi');

// `getElementsTagName` selects all elements with the specified tag name and returns an HTMLCollection.
// document.getElementsByTagName('');

//AddEvent Listeners in Javascript
// examples of Event listeners

/*
1. Click Event
2. DblClick Event
3. mouseover Event
4. Mouseenter Event
5. Mouseleave Event
6. Load Event
7. Change Event
8. Scroll Event
9. Mousemove Event
10. input Event
11. focus Event

*/

let box1 = document.querySelector('#box1')
let box2 = document.querySelector('#box2')
let box3 = document.querySelector('#box3')

// DOUBLE CLICK EVENT

box1.addEventListener('dblclick',function(){
    alert('Favour is learning javascript')
})

// CLICK EVENT

box2.addEventListener('click', function(){
    box1.style.width = '80%';
    box2.style.width = '80%';
    box2.style.background = 'orange';
    box3.style.width = '60%';
})

// box1.addEventListener('click', function(){
// alert('favour is learning javascript')
//})

// MOUSE-ENTER EVENT
box3.addEventListener('mouseenter', function(){
    box3.style.backgroundColor = 'green'
})

// MOUSE-LEAVE EVENT
box3.addEventListener('mouseleave', function(){
    box3.style.backgroundColor = 'fuchsia'
})