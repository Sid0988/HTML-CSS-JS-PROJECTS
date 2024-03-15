let allLables = document.querySelectorAll("label")

allLables.forEach((labels)=>{
    labels.innerHTML = labels.innerHTML
    .split("")
    .map(
        (letters, index)=>
        `<span style="transition-delay:${index * 50}ms">${letters}</span>`
    )
    .join("");
})

//As I informed you earlier i have created span element here we have used it, 

//1) in the first line we will have the access of all labels 
//2) in the second line we will pass both lables on forEach loop and it will take the inner html content of the label, and it will split, Note:- when we use split it will split each letter and it will convert it into an array, and .map method will iterate over each element and it will wrap each letter into the span element, and it will join each letter
// when we will not focus on any labels or input, still js code will run but those element will be on same position, because span element will apply only on focused. 