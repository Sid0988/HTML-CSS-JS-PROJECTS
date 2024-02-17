let cursor = document.querySelector('.cursor')

document.addEventListener('mousemove', MoveCursor)

const MoveCursor = (event)=>{
    cursor.style.left = event.pageX + "px";
    cursor.style.top = event.pageY + "px";
}


// //Code Explaination
// In this code indirectly, the 'mousemove' event is being "passed" to the moveCursor function through the event parameter. Inside the moveCursor function, you can then access properties of the event object, such as pageX and pageY, to respond to the mouse movement event appropriately.

// In this code, we are assigning one value of mousemovent to the left and another value of mouse movement to the top through event parament with the function; 



// This is the another way to write same program 
// document.onmouseover = function(event) {
//     // Update cursor position based on mouse coordinates
//     cursor.style.left = event.pageX + 'px';
//     cursor.style.top = event.pageY + 'px';
// };

