// let ele = document.getElementById('pehla'); //to select an element by its id
// console.log(ele);

// ele.innerText="Hamlon"  //to change the text of the element

// let ele2 = document.getElementsByClassName('first'); //to select elements by their class name, it returns an array like object

// for(let i=0; i<ele2.length; i++){   //ele2 is an array like object
//     console.log(ele2[i].innerText);
// }

// for(ele of ele2){
//   console.log(ele.innerText);
// }

// let tag = document.getElementsByTagName('h1'); //to select elements by their tag name, it returns an array like object

// for(let i=0;i<tag.length;i++){  
//   console.log(tag[i].innerText)
// }



// //querySelector
// let q=document.querySelectorAll("h1") //querySelectorAll is used to select elements by their tag name, class name, id or any other selector, it returns a node list which is an array like object
// console.log(q)
// // for(let i=0;i<q.length;i++){
// //   console.log(q[i].innerText)
// // }

// for(ele of q){
//   console.log(ele.innerText)
// }

// //comparision of getElementById, getElementsByClassName, getElementsByTagName and querySelectorAll:
// // getElementById: it is used to select an element by its id, it returns a single element
// // getElementsByClassName: it is used to select elements by their class name, it returns an array like object
// // getElementsByTagName: it is used to select elements by their tag name, it returns an array like object
// // querySelectorAll: it is used to select elements by their tag name, class name, id or any other selector, it returns a node list which is an array like object


const element = document.querySelector("div")
console.log(element.textContent)
console.log(element.innerText)